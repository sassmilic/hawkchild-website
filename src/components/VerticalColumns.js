export default function VerticalColumns({ leftMediaList, rightMediaList }) {
    return (
        <div className="vertical-columns-container">
            <div className="column">
                {leftMediaList.map((media, index) => (
                    <img
                        key={index}
                        src={media.url}
                        alt="collage media"
                        style={media.customStyles}
                    />
                ))}
            </div>
            <div className="column">
                {rightMediaList.map((media, index) => (
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

