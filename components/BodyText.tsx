import { Text } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const BodyText = styled(Text)`
  position: relative;
  color: ${({ color }: { color: string }) => color || "#888"};
  ${({ bodySize, bodyWeight }: MediaInfoCardProps) => `
    ${bodySize ? `font-size: ${bodySize};` : ""}
    ${bodyWeight ? `font-weight: ${bodyWeight};` : ""}
  `}
`;
