import React from 'react';
import styled, { css } from 'styled-components';

type InputState = 'Default' | 'Error' | 'Disabled' | 'Focused';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
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

const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 10px 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.radius.sm};
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.semantic.text.tertiary};
  }

  &:focus {
    border-color: ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.surface.input.focus};
    box-shadow: 0 0 0 1px ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.surface.input.focus};
  }

  &:disabled {
    background: ${({ theme }) => theme.semantic.surface.status.disabled};
    color: ${({ theme }) => theme.semantic.support.disabled};
    cursor: not-allowed;
  }
`;

const HelperText = styled.span<{ $error: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.text.tertiary};
`;

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error = false,
  errorMessage,
  ...props
}) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledInput $error={error} {...props} />
    {(error && errorMessage) && <HelperText $error>{errorMessage}</HelperText>}
    {!error && helperText && <HelperText $error={false}>{helperText}</HelperText>}
  </Wrapper>
);
