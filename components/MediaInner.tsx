import { Pressable } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const MediaInner = styled(Pressable)`
  background-color: #fff8;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ mediaRadius, mediaSquare }: MediaInfoCardProps) => `
    aspect-ratio: ${mediaSquare ? "1" : ""};
    border-radius: calc(${mediaRadius} - 5px);
  `}
`;