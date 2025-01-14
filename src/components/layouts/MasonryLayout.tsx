import * as React from "react";

import computeMasonryLayout from "../../layouts/masonry";
import PhotoRenderer from "../renderers/PhotoRenderer";
import ColumnContainerRenderer from "../renderers/ColumnContainerRenderer";
import { ColumnsLayoutOptions, ComponentsProps, Photo, RenderColumnContainer, RenderPhoto } from "../../types";

type MasonryLayoutProps<T extends Photo = Photo> = {
    photos: T[];
    layoutOptions: ColumnsLayoutOptions<T>;
    renderPhoto?: RenderPhoto<T>;
    renderColumnContainer?: RenderColumnContainer<T>;
    componentsProps?: ComponentsProps;
};

const MasonryLayout = <T extends Photo = Photo>(props: MasonryLayoutProps<T>) => {
    const { photos, layoutOptions, renderPhoto, renderColumnContainer, componentsProps } = props;

    const masonryLayout = computeMasonryLayout({ photos, layoutOptions });

    if (!masonryLayout) return null;

    return (
        <>
            {masonryLayout.map((column, columnIndex) => (
                <ColumnContainerRenderer
                    key={`masonry-column-${columnIndex}`}
                    layoutOptions={layoutOptions}
                    columnsCount={masonryLayout.length}
                    columnIndex={columnIndex}
                    renderColumnContainer={renderColumnContainer}
                    columnContainerProps={componentsProps?.columnContainerProps}
                >
                    {column.map(({ photo, layout }) => (
                        <PhotoRenderer
                            key={photo.key || photo.src}
                            photo={photo}
                            layout={layout}
                            layoutOptions={layoutOptions}
                            renderPhoto={renderPhoto}
                            imageProps={componentsProps?.imageProps}
                        />
                    ))}
                </ColumnContainerRenderer>
            ))}
        </>
    );
};

export default MasonryLayout;
