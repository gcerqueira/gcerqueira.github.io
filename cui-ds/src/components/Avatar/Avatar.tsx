import React from 'react';
import styled from 'styled-components';

type AvatarType = 'Initial' | 'Image';

export interface AvatarProps {
  type?: AvatarType;
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
}

const StyledAvatar = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.semantic.brand.primary};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ $size }) => Math.round($size * 0.4)}px;
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar: React.FC<AvatarProps> = ({
  type = 'Initial',
  src,
  alt = '',
  initials = '',
  size = 40,
}) => (
  <StyledAvatar $size={size}>
    {type === 'Image' && src ? (
      <AvatarImage src={src} alt={alt} />
    ) : (
      initials.slice(0, 2).toUpperCase()
    )}
  </StyledAvatar>
);
