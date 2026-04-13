import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface SnackbarProps {
  open: boolean;
  message: string;
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
}

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Wrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  align-items: center;
  gap: ${({ theme }) => theme.spacing['16']};
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.gray[900]};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  animation: ${slideUp} 0.2s ease;
  min-width: 300px;
`;

const Message = styled.span`
  flex: 1;
`;

const Action = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.semantic.brand.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  padding: 0;

  &:hover { text-decoration: underline; }
`;

const Close = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  line-height: 1;

  &:hover { color: #ffffff; }
`;

export const Snackbar: React.FC<SnackbarProps> = ({ open, message, action, onClose }) => (
  <Wrapper $open={open}>
    <Message>{message}</Message>
    {action && <Action onClick={action.onClick}>{action.label}</Action>}
    {onClose && <Close onClick={onClose}>&times;</Close>}
  </Wrapper>
);
