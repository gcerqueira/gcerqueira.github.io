import React from 'react';
import styled from 'styled-components';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  collapsed?: boolean;
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const CrumbLink = styled.a`
  color: ${({ theme }) => theme.semantic.brand.primary};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const CurrentCrumb = styled.span`
  color: ${({ theme }) => theme.semantic.text.secondary};
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.semantic.text.tertiary};
`;

const CollapseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.semantic.text.tertiary};
  cursor: pointer;
  padding: 2px 4px;
  font-size: inherit;
  &:hover { color: ${({ theme }) => theme.semantic.brand.primary}; }
`;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, collapsed = false }) => {
  const displayItems = collapsed && items.length > 3
    ? [items[0], { label: '...' }, items[items.length - 1]]
    : items;

  return (
    <Nav aria-label="Breadcrumb">
      {displayItems.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Separator>/</Separator>}
          {item.label === '...' ? (
            <CollapseButton>...</CollapseButton>
          ) : i === displayItems.length - 1 ? (
            <CurrentCrumb>{item.label}</CurrentCrumb>
          ) : (
            <CrumbLink href={item.href || '#'}>{item.label}</CrumbLink>
          )}
        </React.Fragment>
      ))}
    </Nav>
  );
};
