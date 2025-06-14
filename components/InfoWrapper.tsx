import { View } from 'react-native';
import styled from 'rn-css';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export const InfoWrapper = styled(View)`
  align-items: ${({ align }: MediaInfoCardProps) => align || "flex-start"};
  overflow: hidden;
  max-width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
`;