import type { ReactNode } from 'react';
import type { PressableProps, TextStyle } from 'react-native';

export interface MediaInfoCardProps extends Omit<PressableProps, 'style'> {
    media?: ReactNode;
    mediaOverlay?: ReactNode;
    mediaWidth?: number | string;
    mediaHeight?: number | string;
    mediaRadius?: number | string;
    mediaBorder?: number;
    mediaSquare?: boolean;
    mediaGap?: number;
    mainColor?: string;

    onMediaPress?: (e?: unknown) => void;
    onPress?: (e?: unknown) => void;

    title?: string;
    body?: string;

    vertical?: boolean;
    spacing?: number;
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end';

    fullWidth?: boolean;
    hoverable?: boolean;
    lighterHighlight?: boolean;
    radius?: number;
    adaptWidthToMedia?: boolean;

    focus?: boolean;
    attrsOnFocus?: Partial<MediaInfoCardProps>;

    children?: ReactNode;
    titleSize?: number | string;
    bodySize?: number | string;

    titleWeight?: TextStyle['fontWeight'];
    bodyWeight?: TextStyle['fontWeight'];
    titleLines?: number;
    bodyLines?: number;

    onTitlePress?: (e?: unknown) => void;
    onBodyPress?: (e?: unknown) => void;
}
