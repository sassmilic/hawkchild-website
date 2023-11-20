export default function VerticalColumns({ leftMediaList, rightMediaList, onImageLoad }) {
    return (
        <div className="vertical-columns-container">
            <div className="column">
                {leftMediaList.map((media, index) => (
                    <div
                        key={index}
                        style={media.customStyles}
                        >
                        <img src={media.url} onLoad={onImageLoad} />
                    </div>
                ))}
            </div>
            <div className="column">
                {rightMediaList.map((media, index) => (
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

