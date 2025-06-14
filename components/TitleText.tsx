import { Text } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const TitleText = styled(Text)`
  position: relative;
  color: ${({ mainColor }: MediaInfoCardProps) => mainColor || "#000"};
  ${({ titleSize, titleWeight }: MediaInfoCardProps) => `
    ${titleSize ? `font-size: ${titleSize};` : ""}
    ${titleWeight ? `font-weight: ${titleWeight};` : ""}
  `}
`;
