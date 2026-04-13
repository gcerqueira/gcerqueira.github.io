import React from 'react';
import styled from 'styled-components';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
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

const Box = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme, $checked }) => $checked ? theme.semantic.brand.primary : theme.colors.gray[500]};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, $checked }) => $checked ? theme.semantic.brand.primary : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &::after {
    content: '';
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    width: 5px;
    height: 10px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
  }
`;

const LabelText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  label,
  onChange,
}) => (
  <Wrapper $disabled={disabled}>
    <HiddenInput
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
    />
    <Box $checked={checked} $disabled={disabled} />
    {label && <LabelText>{label}</LabelText>}
  </Wrapper>
);
