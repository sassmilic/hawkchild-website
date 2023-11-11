export default function Image({ index, src, onImageLoad }) {
    return (
        <img
            src={src}
            onLoad={onImageLoad}
        />
    );
}

