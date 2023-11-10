import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Image(props) {
    // Construct placeholderSrc by replacing the base directory with './pixelated/'
    const placeholderSrc = props.src.replace(/^(.*\/)([^\/]+)$/, './pixelated/$2');

    return (
        <LazyLoadImage
            key={props.index}
            src={props.src}
            placeholderSrc={placeholderSrc}
        />
    );
}

