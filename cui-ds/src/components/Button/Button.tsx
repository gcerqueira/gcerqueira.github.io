import React from 'react';
import styled, { css } from 'styled-components';
import { CUITheme } from '../../theme';

type ButtonType = 'Primary' | 'Secondary' | 'Text' | 'Outline' | 'Icon';
type ButtonSize = 'Medium' | 'Large';
type ButtonStyle = 'Brand' | 'White';
type ButtonState = 'Default' | 'Hover' | 'Disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  buttonStyle?: ButtonStyle;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const getVariantStyles = (variant: ButtonType, buttonStyle: ButtonStyle) => css`
  ${({ theme }: { theme: CUITheme }) => {
    const brand = theme.semantic.brand.primary;
    const isWhite = buttonStyle === 'White';

    switch (variant) {
      case 'Primary':
        return css`
          background: ${isWhite ? '#ffffff' : brand};
          color: ${isWhite ? brand : '#ffffff'};
          border: 2px solid ${isWhite ? '#ffffff' : brand};
          &:hover:not(:disabled) {
            opacity: 0.85;
          }
        `;
      case 'Secondary':
        return css`
          background: ${isWhite ? 'rgba(255,255,255,0.15)' : theme.semantic.brand.secondary};
          color: ${isWhite ? '#ffffff' : brand};
          border: 2px solid transparent;
          &:hover:not(:disabled) {
            opacity: 0.85;
          }
        `;
      case 'Text':
        return css`
          background: transparent;
          color: ${isWhite ? '#ffffff' : brand};
          border: 2px solid transparent;
          &:hover:not(:disabled) {
            background: ${theme.semantic.brand.secondary};
          }
        `;
      case 'Outline':
        return css`
          background: transparent;
          color: ${isWhite ? '#ffffff' : brand};
          border: 2px solid ${isWhite ? '#ffffff' : brand};
          &:hover:not(:disabled) {
            background: ${isWhite ? 'rgba(255,255,255,0.1)' : theme.semantic.brand.secondary};
          }
        `;
      case 'Icon':
        return css`
          background: transparent;
          color: ${isWhite ? '#ffffff' : brand};
          border: 2px solid transparent;
          padding: 8px;
          min-width: unset;
          &:hover:not(:disabled) {
            background: ${theme.semantic.brand.secondary};
          }
        `;
    }
  }}
`;

const getSizeStyles = (size: ButtonSize) => css`
  ${size === 'Large'
    ? css`
        padding: 14px 24px;
        font-size: 16px;
        min-height: 48px;
      `
    : css`
        padding: 10px 20px;
        font-size: 14px;
        min-height: 40px;
      `}
`;

const StyledButton = styled.button<{
  $variant: ButtonType;
  $size: ButtonSize;
  $buttonStyle: ButtonStyle;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['8']};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
  min-width: 100px;

  ${({ $size }) => getSizeStyles($size)}
  ${({ $variant, $buttonStyle }) => getVariantStyles($variant, $buttonStyle)}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.semantic.brand.primary};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'Primary',
  size = 'Medium',
  buttonStyle = 'Brand',
  iconLeft,
  iconRight,
  children,
  ...props
}) => (
  <StyledButton
    $variant={variant}
    $size={size}
    $buttonStyle={buttonStyle}
    {...props}
  >
    {iconLeft}
    {children}
    {iconRight}
  </StyledButton>
);
