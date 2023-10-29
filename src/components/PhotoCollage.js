import React from 'react';
import './PhotoCollage.css';
import { ReactComponent as Title} from '../assets/hawkchild_diy.svg';
import posterEC from '../assets/collage/2023_EvianChrist/poster.jpg';
import gifEC from '../assets/collage/2023_EvianChrist/josh.gif';
import posterSky from '../assets/collage/2023_SkyH1-Woesum/poster.jpeg';

function Collage() {
    const mediaList = [
        {
            type: 'image',
            url: posterEC,
            customStyles: {
            }
        },
        {
            type: 'gif',
            url: gifEC,
            customStyles: {
                //width: '85%',
                //margin: '20px auto'
		marginLeft: '50px',
                // ... any other custom styles
            }
        },
        {
            type: 'image',
            url: posterSky,
            customStyles: {
                width: '70%',
                margin: '20px auto'
                // ... any other custom styles
            }
        }
        // ... add more as needed
    ];

    return (
        <div className="collage-container">
            <div className="column">
                {mediaList.filter((_, index) => index % 2 === 0).map((media, index) => (
                    <img 
                        key={index}
                        src={media.url}
                        alt="collage media"
                        style={media.customStyles}
                    />
                ))}
            </div>
            <div className="column">
                {mediaList.filter((_, index) => index % 2 !== 0).map((media, index) => (
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

export default Collage;

