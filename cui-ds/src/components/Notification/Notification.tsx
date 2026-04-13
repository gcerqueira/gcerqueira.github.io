import React from 'react';
import styled from 'styled-components';

type NotificationSize = 'Small' | 'Medium' | 'Large';

export interface NotificationProps {
  size?: NotificationSize;
  count: number;
}

const sizeMap: Record<NotificationSize, { size: string; fontSize: string }> = {
  Small: { size: '18px', fontSize: '10px' },
  Medium: { size: '24px', fontSize: '12px' },
  Large: { size: '32px', fontSize: '14px' },
};

const StyledNotification = styled.div<{ $size: NotificationSize }>`
  min-width: ${({ $size }) => sizeMap[$size].size};
  height: ${({ $size }) => sizeMap[$size].size};
  border-radius: ${({ theme }) => theme.radius.rounded};
  background: ${({ theme }) => theme.semantic.status.negative};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0 6px;
`;

export const Notification: React.FC<NotificationProps> = ({
  size = 'Medium',
  count,
}) => (
  <StyledNotification $size={size}>
    {count > 99 ? '99+' : count}
  </StyledNotification>
);
