import Image from './Image';

export default function VerticalColumns({ leftMediaList, rightMediaList }) {
    return (
        <div className="vertical-columns-container">
            <div className="column">
                {leftMediaList.map((media, index) => (
                    <div style={media.customStyles}>
                        <Image
                            key={index}
                            src={media.url}
                        />
                    </div>
                ))}
            </div>
            <div className="column">
                {rightMediaList.map((media, index) => (
                    <div style={media.customStyles}>
                        <Image
                            key={index}
                            src={media.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

