import React from 'react';
import styled, { css } from 'styled-components';

type CardState = 'Default' | 'Hover' | 'Selected';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: CardState;
  selected?: boolean;
}

const StyledCard = styled.div<{ $selected: boolean }>`
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing['24']};
  transition: all 0.2s ease;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.semantic.brand.primary};
      box-shadow: 0 0 0 1px ${theme.semantic.brand.primary};
    `}

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

export const Card: React.FC<CardProps> = ({
  selected = false,
  children,
  ...props
}) => (
  <StyledCard $selected={selected} {...props}>
    {children}
  </StyledCard>
);
