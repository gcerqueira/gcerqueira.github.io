import React from 'react';
import styled, { css } from 'styled-components';

export interface ChipProps {
  active?: boolean;
  icon?: React.ReactNode;
  dropdown?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledChip = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};

  ${({ $active, theme }) =>
    $active
      ? css`
          background: ${theme.semantic.brand.primary};
          color: #ffffff;
          border-color: ${theme.semantic.brand.primary};
        `
      : css`
          background: transparent;
          color: ${theme.semantic.text.primary};
          &:hover {
            background: ${theme.colors.gray[200]};
          }
        `}
`;

const DropdownArrow = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Chip: React.FC<ChipProps> = ({
  active = false,
  icon,
  dropdown = false,
  onClick,
  children,
}) => (
  <StyledChip $active={active} onClick={onClick} type="button">
    {icon}
    {children}
    {dropdown && <DropdownArrow />}
  </StyledChip>
);
