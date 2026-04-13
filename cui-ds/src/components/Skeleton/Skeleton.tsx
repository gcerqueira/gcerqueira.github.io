import React from 'react';
import styled, { keyframes } from 'styled-components';

type SkeletonType = 'Rect' | 'Circle';

export interface SkeletonProps {
  type?: SkeletonType;
  width?: string | number;
  height?: string | number;
}

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const StyledSkeleton = styled.div<{ $type: SkeletonType; $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $type, theme }) => $type === 'Circle' ? '50%' : theme.radius.sm};
  background: ${({ theme }) => theme.colors.gray[300]};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray[300]} 0px,
    ${({ theme }) => theme.colors.gray[200]} 40px,
    ${({ theme }) => theme.colors.gray[300]} 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

const toCSS = (val: string | number) => typeof val === 'number' ? `${val}px` : val;

export const Skeleton: React.FC<SkeletonProps> = ({
  type = 'Rect',
  width = '100%',
  height = type === 'Circle' ? 40 : 20,
}) => (
  <StyledSkeleton
    $type={type}
    $width={toCSS(width)}
    $height={toCSS(height)}
  />
);
