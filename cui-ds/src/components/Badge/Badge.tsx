import React from 'react';
import styled, { css } from 'styled-components';
import { CUITheme } from '../../theme';

type BadgeStatus = 'Positive' | 'Warning' | 'Negative' | 'Info' | 'Neutral';

export interface BadgeProps {
  status?: BadgeStatus;
  background?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const getStatusColors = (status: BadgeStatus, hasBg: boolean) => css`
  ${({ theme }: { theme: CUITheme }) => {
    const map: Record<BadgeStatus, { color: string; bg: string }> = {
      Positive: { color: theme.semantic.status.positive, bg: theme.semantic.surface.status.positive },
      Warning: { color: theme.semantic.status.alert, bg: theme.semantic.surface.status.alert },
      Negative: { color: theme.semantic.status.negative, bg: theme.semantic.surface.status.negative },
      Info: { color: theme.semantic.status.info, bg: theme.semantic.surface.status.info },
      Neutral: { color: theme.semantic.text.secondary, bg: theme.semantic.surface.status.disabled },
    };
    const { color, bg } = map[status];
    return css`
      color: ${color};
      background: ${hasBg ? bg : 'transparent'};
    `;
  }}
`;

const StyledBadge = styled.span<{ $status: BadgeStatus; $hasBg: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4']};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: nowrap;

  ${({ $status, $hasBg }) => getStatusColors($status, $hasBg)}
`;

const Dot = styled.span<{ $status: BadgeStatus }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
`;

export const Badge: React.FC<BadgeProps> = ({
  status = 'Neutral',
  background = true,
  icon,
  children,
}) => (
  <StyledBadge $status={status} $hasBg={background}>
    {icon || <Dot $status={status} />}
    {children}
  </StyledBadge>
);
