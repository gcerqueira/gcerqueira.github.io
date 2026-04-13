import React from 'react';
import styled from 'styled-components';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4']};
  width: 100%;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.semantic.text.primary};
`;

const StyledSelect = styled.select<{ $error: boolean }>`
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.radius.sm};
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23424242' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    border-color: ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.surface.input.focus};
    box-shadow: 0 0 0 1px ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.surface.input.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.semantic.surface.status.disabled};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.semantic.support.error};
`;

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  placeholder = 'Select an option',
  error = false,
  errorMessage,
  disabled = false,
  onChange,
}) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledSelect
      $error={error}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </StyledSelect>
    {error && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </Wrapper>
);
