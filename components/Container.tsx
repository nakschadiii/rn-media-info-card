import { Pressable } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const Container = styled(Pressable)`
  background-color: #0000;
  align-self: flex-start;
  justify-content: stretch;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  ${({ vertical, spacing, align, justify, fullWidth, hoverable, lighterHighlight, radius, adaptWidthToMedia, mediaWidth }: MediaInfoCardProps) => `
    ${!vertical ? "justify-content" : "align-items"}: ${align};
    ${vertical ? "justify-content" : "align-items"}: ${justify};
    width: ${fullWidth ? "100%" : (adaptWidthToMedia && vertical) ? `${mediaWidth+(spacing*2)}` : "auto"};
    justify-content: flex-start;
    flex-direction: ${!vertical ? (align === "end" ? "row-reverse" : "row") : "column"};
    padding: calc(${spacing}) --calc(${spacing} * 1.5);
    row-gap: calc(${spacing} * 0.5);
    column-gap: calc(${spacing});
    border-radius: ${radius};
    ${hoverable && `&:hover{
      background: ${(lighterHighlight ? "#fff" : "#000")+"1"};
    }`}
  `}
  
`;