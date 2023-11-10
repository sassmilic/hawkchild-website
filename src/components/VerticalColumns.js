import Image from './Image';

export default function VerticalColumns({ leftMediaList, rightMediaList }) {
    return (
        <div className="vertical-columns-container">
            <div className="column">
                {leftMediaList.map((media, index) => (
                    <div
                        key={index}
                        style={media.customStyles}
                        >
                        <Image src={media.url} />
                    </div>
                ))}
            </div>
            <div className="column">
                {rightMediaList.map((media, index) => (
                    <div
                        key={index}
                        style={media.customStyles}
                        >
                        <Image src={media.url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

