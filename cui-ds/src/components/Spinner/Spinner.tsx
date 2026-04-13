import React from 'react';
import styled, { keyframes } from 'styled-components';

type SpinnerSize = 'Small' | 'Medium' | 'Large';

export interface SpinnerProps {
  size?: SpinnerSize;
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const sizeMap: Record<SpinnerSize, number> = {
  Small: 16,
  Medium: 24,
  Large: 40,
};

const StyledSpinner = styled.div<{ $size: SpinnerSize }>`
  width: ${({ $size }) => sizeMap[$size]}px;
  height: ${({ $size }) => sizeMap[$size]}px;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-top-color: ${({ theme }) => theme.semantic.brand.primary};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const Spinner: React.FC<SpinnerProps> = ({ size = 'Medium' }) => (
  <StyledSpinner $size={size} />
);
