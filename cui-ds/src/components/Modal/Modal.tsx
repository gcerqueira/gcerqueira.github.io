import React from 'react';
import styled from 'styled-components';

export interface ModalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.semantic.surface.overlay};
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Panel = styled.div`
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['24']};
  max-width: 560px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['16']};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.semantic.text.primary};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.semantic.text.secondary};
  font-size: 20px;
  line-height: 1;

  &:hover { color: ${({ theme }) => theme.semantic.text.primary}; }
`;

const Body = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.secondary};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['12']};
  justify-content: flex-end;
`;

export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  children,
  actions,
}) => (
  <Overlay $open={open} onClick={onClose}>
    <Panel onClick={(e) => e.stopPropagation()}>
      {(title || onClose) && (
        <Header>
          {title && <Title>{title}</Title>}
          {onClose && <CloseButton onClick={onClose}>&times;</CloseButton>}
        </Header>
      )}
      <Body>{children}</Body>
      {actions && <Actions>{actions}</Actions>}
    </Panel>
  </Overlay>
);
