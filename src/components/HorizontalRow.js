export default function HorizontalRow({ mediaList, containerStyles = {} }) {
    return (
        <div className="horizontal-row-container" style={containerStyles}>
            {mediaList.map((media, index) => (
                <img
                    key={index}
                    src={media.url}
                    alt="collage media"
                    style={media.customStyles}
                />
            ))}
        </div>
    );
}

