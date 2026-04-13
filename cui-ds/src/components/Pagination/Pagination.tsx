import React from 'react';
import styled from 'styled-components';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4']};
`;

const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.semantic.brand.primary : theme.colors.gray[300])};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ $active, theme }) => ($active ? theme.semantic.brand.primary : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.semantic.text.primary)};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.semantic.brand.primary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Ellipsis = styled.span`
  padding: 0 4px;
  color: ${({ theme }) => theme.semantic.text.tertiary};
`;

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onChange }) => {
  const getPages = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <Wrapper>
      <PageButton disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)}>
        &lsaquo;
      </PageButton>
      {getPages().map((page, i) =>
        page === 'ellipsis' ? (
          <Ellipsis key={`e-${i}`}>&hellip;</Ellipsis>
        ) : (
          <PageButton key={page} $active={page === currentPage} onClick={() => onChange(page)}>
            {page}
          </PageButton>
        )
      )}
      <PageButton disabled={currentPage === totalPages} onClick={() => onChange(currentPage + 1)}>
        &rsaquo;
      </PageButton>
    </Wrapper>
  );
};
