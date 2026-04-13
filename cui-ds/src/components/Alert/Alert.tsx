import React from 'react';
import styled, { css } from 'styled-components';
import { CUITheme } from '../../theme';

type AlertType = 'Default' | 'Icon' | 'Image';

export interface AlertProps {
  type?: AlertType;
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description?: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.semantic.surface.neutral};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing['24']};
  gap: ${({ theme }) => theme.spacing['16']};
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing['16']};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4']};
  flex: 1;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.semantic.text.primary};
  margin: 0;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.semantic.text.secondary};
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['12']};
  justify-content: flex-end;
`;

const ActionButton = styled.button<{ $primary?: boolean }>`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${({ $primary, theme }) =>
    $primary
      ? css`
          background: ${theme.semantic.brand.primary};
          color: #ffffff;
        `
      : css`
          background: transparent;
          color: ${theme.semantic.brand.primary};
        `}

  &:hover { opacity: 0.85; }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const AlertImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: cover;
`;

export const Alert: React.FC<AlertProps> = ({
  type = 'Default',
  icon,
  image,
  title,
  description,
  primaryAction,
  secondaryAction,
}) => (
  <Wrapper>
    <Content>
      {type === 'Icon' && icon && <IconWrapper>{icon}</IconWrapper>}
      {type === 'Image' && image && <AlertImage src={image} alt="" />}
      <TextContent>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </TextContent>
    </Content>
    {(primaryAction || secondaryAction) && (
      <Actions>
        {secondaryAction && (
          <ActionButton onClick={secondaryAction.onClick}>
            {secondaryAction.label}
          </ActionButton>
        )}
        {primaryAction && (
          <ActionButton $primary onClick={primaryAction.onClick}>
            {primaryAction.label}
          </ActionButton>
        )}
      </Actions>
    )}
  </Wrapper>
);
