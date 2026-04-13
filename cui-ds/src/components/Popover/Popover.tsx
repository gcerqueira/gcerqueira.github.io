import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export interface PopoverProps {
  title?: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const Panel = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing['16']};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.15s ease;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.semantic.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing['8']};
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.semantic.text.secondary};
`;

export const Popover: React.FC<PopoverProps> = ({ title, content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <div onClick={() => setVisible(!visible)}>{children}</div>
      <Panel $visible={visible}>
        {title && <Title>{title}</Title>}
        <Content>{content}</Content>
      </Panel>
    </Wrapper>
  );
};
