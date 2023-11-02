export default function HorizontalRow({ mediaList, containerStyles = {}, invisibleCount = 0 }) {
    return (
        <div className="horizontal-row-container" style={containerStyles}>
            <div className="row">
                {/* Render invisible elements */}
                {Array.from({ length: invisibleCount }).map((_, index) => (
                    <div key={`invisible-${index}`} className="invisible-element"></div>
                ))}
                {/* Existing mediaList mapping */}
                {mediaList.map((media, index) => (
                    <img
                        key={index}
                        src={media.url}
                        alt="collage media"
                        style={media.customStyles}
                    />
                ))}
            </div>
        </div>
    );
}

