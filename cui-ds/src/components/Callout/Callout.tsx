import React from 'react';
import styled, { css } from 'styled-components';
import { CUITheme } from '../../theme';

type CalloutStyle = 'Neutral' | 'Positive' | 'Warning' | 'Negative' | 'Info' | 'Brand';

export interface CalloutProps {
  style?: CalloutStyle;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const getStyleColors = (calloutStyle: CalloutStyle) => css`
  ${({ theme }: { theme: CUITheme }) => {
    const map: Record<CalloutStyle, { bg: string; border: string; color: string }> = {
      Neutral: { bg: theme.colors.gray[200], border: theme.colors.gray[400], color: theme.semantic.text.primary },
      Positive: { bg: theme.semantic.surface.status.positive, border: theme.semantic.status.positive, color: theme.semantic.status.positive },
      Warning: { bg: theme.semantic.surface.status.alert, border: theme.semantic.status.alert, color: theme.semantic.status.alert },
      Negative: { bg: theme.semantic.surface.status.negative, border: theme.semantic.status.negative, color: theme.semantic.status.negative },
      Info: { bg: theme.semantic.surface.status.info, border: theme.semantic.status.info, color: theme.semantic.status.info },
      Brand: { bg: theme.semantic.brand.secondary, border: theme.semantic.brand.primary, color: theme.semantic.brand.primary },
    };
    const { bg, border, color } = map[calloutStyle];
    return css`
      background: ${bg};
      border-left: 3px solid ${border};
      color: ${theme.semantic.text.primary};

      svg { color: ${color}; }
    `;
  }}
`;

const StyledCallout = styled.div<{ $calloutStyle: CalloutStyle }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing['12']};
  padding: ${({ theme }) => theme.spacing['16']};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};

  ${({ $calloutStyle }) => getStyleColors($calloutStyle)}
`;

const IconSlot = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const Callout: React.FC<CalloutProps> = ({
  style: calloutStyle = 'Neutral',
  icon,
  children,
}) => (
  <StyledCallout $calloutStyle={calloutStyle}>
    {icon && <IconSlot>{icon}</IconSlot>}
    <div>{children}</div>
  </StyledCallout>
);
