import React from 'react';
import styled from 'styled-components';

type OverlayColor = 'Black' | 'White';

export interface OverlayProps {
  color?: OverlayColor;
  visible?: boolean;
  onClick?: () => void;
}

const StyledOverlay = styled.div<{ $color: OverlayColor; $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ $color }) =>
    $color === 'Black' ? 'rgba(18, 18, 18, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  z-index: 900;
`;

export const Overlay: React.FC<OverlayProps> = ({
  color = 'Black',
  visible = false,
  onClick,
}) => <StyledOverlay $color={color} $visible={visible} onClick={onClick} />;
