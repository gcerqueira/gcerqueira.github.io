import React from 'react';
import styled from 'styled-components';

type EmptyStateType = 'Page' | 'Element';

export interface EmptyStateProps {
  type?: EmptyStateType;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const Wrapper = styled.div<{ $type: EmptyStateType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ $type, theme }) => ($type === 'Page' ? theme.spacing['32'] : theme.spacing['24'])};
  gap: ${({ theme }) => theme.spacing['16']};
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.semantic.text.tertiary};
  font-size: 48px;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.semantic.text.primary};
  margin: 0;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.semantic.text.tertiary};
  margin: 0;
  max-width: 360px;
`;

export const EmptyState: React.FC<EmptyStateProps> = ({
  type = 'Element',
  icon,
  title,
  description,
  action,
}) => (
  <Wrapper $type={type}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    {action}
  </Wrapper>
);
