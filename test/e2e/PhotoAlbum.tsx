import * as React from "react";

import { PhotoAlbum as ReactPhotoAlbum, PhotoAlbumProps, PhotoProps } from "../../src";
import photos from "./photos";

const renderPhoto = ({ photo, wrapperStyle }: PhotoProps) => (
    <div
        style={{
            ...wrapperStyle,
            display: "flex",
            placeItems: "center",
            justifyContent: "center",
            border: "1px solid black",
        }}
    >
        {photo.key}
    </div>
);

const PhotoAlbum = (props: Omit<PhotoAlbumProps, "photos" | "renderPhoto">) => (
    <ReactPhotoAlbum photos={photos} renderPhoto={renderPhoto} {...props} />
);

export default PhotoAlbum;
