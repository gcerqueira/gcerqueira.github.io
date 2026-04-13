import React, { useState } from 'react';
import styled from 'styled-components';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const Tip = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.gray[900]};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease;
  z-index: 1000;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Tip $visible={visible}>{content}</Tip>
      {children}
    </Wrapper>
  );
};
