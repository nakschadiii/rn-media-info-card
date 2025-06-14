import invert from 'invert-color';
import Color from 'colorjs.io';
import { MediaInfoCardProps } from '../types/MediaInfoCardProps';

export function useInfoCard({ mainColor, onMediaPress, onTitlePress, onBodyPress, onPress, hoverable }: MediaInfoCardProps) {
    const c = invert(new Color(mainColor ?? "#000").toString({ format: "hex" }), { black: "#000", white: "#fff", threshold: 0.5 });
    const muted = Color.mix("#bbb", invert(c), 0.5)
        .to('srgb')
        .toString({ format: "hex" });

    const resolveMediaPress = onMediaPress ? { onPress: (e) => onMediaPress(e) } : { pointerEvents: "none" };
    const resolveTitlePress = onTitlePress ? { onPress: (e) => onTitlePress(e) } : { pointerEvents: "none" };
    const resolveBodyPress = onBodyPress ? { onPress: (e) => onBodyPress(e) } : { pointerEvents: "box-none" };
    const resolvePress = onPress ? { onPress } : !hoverable && { pointerEvents: "box-none" };
    return { resolvePress, resolveMediaPress, resolveTitlePress, muted, resolveBodyPress };
}
