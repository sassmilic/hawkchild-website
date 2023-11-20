export default function SingleColumn({ mediaList, onImageLoad, containerStyles = {}, columnStyles = {} }) {
    return (
        <div className="single-column-container" style={containerStyles}>
            <div className="column" style={columnStyles}>
                {mediaList.map((media, index) => (
                    <div
                        key={index}
                        style={media.customStyles}
                        >
                        <img src={media.url} onLoad={onImageLoad} />
                    </div>
                ))}
            </div>
        </div>
    );
}

