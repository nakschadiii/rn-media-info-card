import { Pressable } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const MediaWrapper = styled(Pressable)`
  background-color: #0000;
  overflow: hidden;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
  ${({ mediaWidth, mediaHeight, mediaRadius, mediaBorder, mediaGap, mainColor, mediaSquare }: MediaInfoCardProps) => `
    border-color: ${mainColor};
    width: ${mediaWidth};
    height: ${mediaHeight ?? mediaWidth};
    aspect-ratio: ${mediaSquare ? "1" : ""};
    border-radius: ${mediaRadius};
    border-width: ${mediaBorder};
    padding: ${mediaGap};
  `}
`;