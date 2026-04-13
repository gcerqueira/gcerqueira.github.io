import React from 'react';
import styled from 'styled-components';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Wrapper = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Circle = styled.div<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme, $checked }) => $checked ? theme.semantic.brand.primary : theme.colors.gray[500]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.semantic.brand.primary};
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  }
`;

const LabelText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  disabled = false,
  label,
  name,
  value = '',
  onChange,
}) => (
  <Wrapper $disabled={disabled}>
    <HiddenInput
      type="radio"
      checked={checked}
      disabled={disabled}
      name={name}
      value={value}
      onChange={() => onChange?.(value)}
    />
    <Circle $checked={checked} />
    {label && <LabelText>{label}</LabelText>}
  </Wrapper>
);
