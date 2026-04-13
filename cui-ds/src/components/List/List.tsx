import React from 'react';
import styled from 'styled-components';

export interface ListItemData {
  label: string;
  rightText?: string;
}

export interface ListProps {
  title?: string;
  items: ListItemData[];
  dividers?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.semantic.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 16px;
`;

const Item = styled.div<{ $divider: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.semantic.text.primary};
  border-bottom: ${({ $divider, theme }) => ($divider ? `1px solid ${theme.colors.gray[300]}` : 'none')};
`;

const RightText = styled.span`
  color: ${({ theme }) => theme.semantic.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const List: React.FC<ListProps> = ({ title, items, dividers = true }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {items.map((item, i) => (
      <Item key={i} $divider={dividers && i < items.length - 1}>
        <span>{item.label}</span>
        {item.rightText && <RightText>{item.rightText}</RightText>}
      </Item>
    ))}
  </Wrapper>
);
