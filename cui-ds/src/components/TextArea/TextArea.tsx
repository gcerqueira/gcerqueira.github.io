import React from 'react';
import styled from 'styled-components';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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

const StyledTextArea = styled.textarea<{ $error: boolean }>`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.radius.sm};
  outline: none;
  resize: vertical;
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
    cursor: not-allowed;
  }
`;

const HelperText = styled.span<{ $error: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme, $error }) => $error ? theme.semantic.support.error : theme.semantic.text.tertiary};
`;

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  helperText,
  error = false,
  errorMessage,
  ...props
}) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledTextArea $error={error} {...props} />
    {error && errorMessage && <HelperText $error>{errorMessage}</HelperText>}
    {!error && helperText && <HelperText $error={false}>{helperText}</HelperText>}
  </Wrapper>
);
