import React from 'react';
import styled, { keyframes } from 'styled-components';

type ProgressState = 'Default' | 'Determinate';
type ProgressSize = 'Regular' | 'Large';

export interface LinearProgressProps {
  state?: ProgressState;
  value?: number;
  size?: ProgressSize;
}

const indeterminate = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

const Track = styled.div<{ $size: ProgressSize }>`
  width: 100%;
  height: ${({ $size }) => ($size === 'Large' ? '8px' : '4px')};
  background: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.rounded};
  overflow: hidden;
`;

const Bar = styled.div<{ $state: ProgressState; $value: number }>`
  height: 100%;
  background: ${({ theme }) => theme.semantic.brand.primary};
  border-radius: ${({ theme }) => theme.radius.rounded};
  transition: width 0.3s ease;

  ${({ $state, $value }) =>
    $state === 'Determinate'
      ? `width: ${Math.min(100, Math.max(0, $value))}%;`
      : `width: 50%; animation: ${indeterminate} 1.5s ease-in-out infinite;`}
`;

export const LinearProgress: React.FC<LinearProgressProps> = ({
  state = 'Default',
  value = 0,
  size = 'Regular',
}) => (
  <Track $size={size}>
    <Bar $state={state} $value={value} />
  </Track>
);
