import React from 'react';
import styled from 'styled-components';

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, React.ReactNode>[];
  striped?: boolean;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const THead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[300]};
`;

const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.semantic.text.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Tr = styled.tr<{ $striped?: boolean; $index?: number }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: ${({ $striped, $index, theme }) =>
    $striped && $index !== undefined && $index % 2 === 1 ? theme.colors.gray[200] : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;

const Td = styled.td`
  padding: 12px 16px;
  color: ${({ theme }) => theme.semantic.text.primary};
`;

export const Table: React.FC<TableProps> = ({ columns, data, striped = false }) => (
  <StyledTable>
    <THead>
      <tr>
        {columns.map((col) => (
          <Th key={col.key} style={{ width: col.width }}>{col.header}</Th>
        ))}
      </tr>
    </THead>
    <tbody>
      {data.map((row, i) => (
        <Tr key={i} $striped={striped} $index={i}>
          {columns.map((col) => (
            <Td key={col.key}>{row[col.key]}</Td>
          ))}
        </Tr>
      ))}
    </tbody>
  </StyledTable>
);
