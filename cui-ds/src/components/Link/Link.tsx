import React from 'react';
import styled, { css } from 'styled-components';

type LinkAppearance = 'Text' | 'LinkButton Primary' | 'LinkButton Secondary' | 'LinkButton Outline';
type LinkSize = 'Medium' | 'Large';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  appearance?: LinkAppearance;
  size?: LinkSize;
  disabled?: boolean;
}

const StyledLink = styled.a<{ $appearance: LinkAppearance; $size: LinkSize; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4']};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: ${({ $size, theme }) => $size === 'Large' ? theme.fontSize.md : theme.fontSize.base};

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}

  ${({ $appearance, theme }) => {
    switch ($appearance) {
      case 'Text':
        return css`
          color: ${theme.semantic.brand.primary};
          &:hover { text-decoration: underline; }
        `;
      case 'LinkButton Primary':
        return css`
          color: #ffffff;
          background: ${theme.semantic.brand.primary};
          padding: 10px 20px;
          border-radius: ${theme.radius.md};
          &:hover { opacity: 0.85; }
        `;
      case 'LinkButton Secondary':
        return css`
          color: ${theme.semantic.brand.primary};
          background: ${theme.semantic.brand.secondary};
          padding: 10px 20px;
          border-radius: ${theme.radius.md};
          &:hover { opacity: 0.85; }
        `;
      case 'LinkButton Outline':
        return css`
          color: ${theme.semantic.brand.primary};
          background: transparent;
          padding: 10px 20px;
          border: 2px solid ${theme.semantic.brand.primary};
          border-radius: ${theme.radius.md};
          &:hover { background: ${theme.semantic.brand.secondary}; }
        `;
    }
  }}
`;

export const Link: React.FC<LinkProps> = ({
  appearance = 'Text',
  size = 'Medium',
  disabled = false,
  children,
  ...props
}) => (
  <StyledLink
    $appearance={appearance}
    $size={size}
    $disabled={disabled}
    {...props}
  >
    {children}
  </StyledLink>
);
