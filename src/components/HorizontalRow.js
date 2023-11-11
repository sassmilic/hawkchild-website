export default function HorizontalRow({ mediaList, onImageLoad, containerStyles = {}, invisibleCount = 0 }) {
    return (
        <div className="horizontal-row-container" style={containerStyles}>
            <div className="row">
                {/* Render invisible elements */}
                {Array.from({ length: invisibleCount }).map((_, index) => (
                    <div key={`invisible-${index}`} className="invisible-element"></div>
                ))}
                {/* Existing mediaList mapping */}
                {mediaList.map((media, index) => (
                    <div
                        key={index}
                        style={media.customStyles}>
                        <img src={media.url} onLoad={onImageLoad}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

