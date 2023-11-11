export default function Image(props) {
    // Construct placeholderSrc by replacing the base directory with './pixelated/'
    const placeholderSrc = props.src.replace(/^(.*\/)([^\/]+)$/, '/pixelated/$2');
    console.log(props.src);
    console.log(placeholderSrc);

    return (
        <img
            key={props.index}
            src={props.src}
        />
    );
}

