import { Pressable } from 'react-native';
import { Computed } from "@legendapp/state/react"
import { MediaInfoCardProps } from './types/MediaInfoCardProps';
import * as Components from './components';
import { useInfoCard } from './hooks/useInfoCard';

const MediaInfoCard = (props: MediaInfoCardProps) => {
    const { media = <></>, mediaWidth, mediaHeight, mediaRadius = 0, mediaBorder = 0, mediaGap = 0, mediaOverlay, mediaSquare = true, mainColor = "#fff", title, body, vertical, spacing = 12, align, fullWidth, focus, hoverable, lighterHighlight, radius = 5, attrsOnFocus, justify = "center", adaptWidthToMedia = false, titleWeight, bodyWeight, titleLines, bodyLines, titleSize, bodySize } = props
    const { resolvePress, resolveMediaPress, resolveTitlePress, muted, resolveBodyPress } = useInfoCard(props);

    return (
        <Computed>
            {() => (
                <Components.Container
                    vertical={vertical}
                    spacing={spacing}
                    align={align}
                    fullWidth={fullWidth}
                    hoverable={hoverable}
                    lighterHighlight={lighterHighlight}
                    radius={radius}
                    justify={justify}
                    mediaWidth={mediaWidth}
                    adaptWidthToMedia={adaptWidthToMedia}
                    {...(focus ? attrsOnFocus : {})}
                    {...resolvePress}
                    {...props}
                >
                    <Pressable {...resolveMediaPress}>
                        <Components.MediaWrapper
                            mediaWidth={mediaWidth}
                            mediaHeight={mediaHeight}
                            mediaRadius={mediaRadius}
                            mediaBorder={mediaBorder}
                            mainColor={mainColor}
                            mediaGap={mediaGap}
                            mediaSquare={mediaSquare}
                            {...(focus ? attrsOnFocus : {})}
                        >
                            <Components.MediaInner
                                mediaRadius={mediaRadius}
                                mediaHeight={mediaHeight}
                                mediaSquare={mediaSquare}
                            >
                                {(focus && attrsOnFocus?.media) || media}
                            </Components.MediaInner>
                        </Components.MediaWrapper>
                        <Components.MediaOverlay>
                            {(focus && attrsOnFocus?.mediaOverlay) || mediaOverlay}
                        </Components.MediaOverlay>
                    </Pressable>
                    {(title || body) && (
                        <Components.InfoWrapper align={align} {...(focus ? attrsOnFocus : {})} pointerEvents={"box-none"}>
                            {title && (
                                <Components.TitleText
                                    mainColor={mainColor}
                                    titleSize={titleSize}
                                    titleWeight={titleWeight}
                                    numberOfLines={titleLines}
                                    {...resolveTitlePress}
                                    {...(focus ? attrsOnFocus : {})}
                                >
                                    {title}
                                </Components.TitleText>
                            )}

                            {body && (
                                <Components.BodyText
                                    color={muted}
                                    bodySize={bodySize}
                                    bodyWeight={bodyWeight}
                                    numberOfLines={bodyLines}
                                    {...resolveBodyPress}
                                    {...(focus ? attrsOnFocus : {})}
                                >
                                    {body}
                                </Components.BodyText>
                            )}
                        </Components.InfoWrapper>
                    )}
                </Components.Container>
            )}
        </Computed>
    );
};

export default MediaInfoCard