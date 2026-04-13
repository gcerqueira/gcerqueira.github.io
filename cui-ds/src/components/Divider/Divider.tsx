import React from 'react';
import styled from 'styled-components';

export interface DividerProps {
  spacing?: string;
}

const StyledDivider = styled.hr<{ $spacing: string }>`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray[300]};
  margin: ${({ $spacing }) => $spacing} 0;
  width: 100%;
`;

export const Divider: React.FC<DividerProps> = ({ spacing = '16px' }) => (
  <StyledDivider $spacing={spacing} />
);
