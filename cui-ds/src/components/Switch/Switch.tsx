import React from 'react';
import styled from 'styled-components';

type LabelPosition = 'Left' | 'Right' | 'None';

export interface SwitchProps {
  checked?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  onChange?: (checked: boolean) => void;
}

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
  cursor: pointer;
`;

const Track = styled.div<{ $checked: boolean }>`
  width: 44px;
  height: 24px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  background: ${({ theme, $checked }) => $checked ? theme.semantic.brand.primary : theme.colors.gray[400]};
  position: relative;
  transition: background 0.2s ease;
`;

const Thumb = styled.div<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? '22px' : '2px')};
  transition: left 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const LabelText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  label,
  labelPosition = 'Right',
  onChange,
}) => (
  <Wrapper>
    <HiddenInput
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
    />
    {label && labelPosition === 'Left' && <LabelText>{label}</LabelText>}
    <Track $checked={checked}>
      <Thumb $checked={checked} />
    </Track>
    {label && labelPosition === 'Right' && <LabelText>{label}</LabelText>}
  </Wrapper>
);
