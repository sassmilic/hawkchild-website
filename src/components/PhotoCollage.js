import React from 'react';
import './PhotoCollage.css';
import { ReactComponent as Title} from '../assets/hawkchild_diy.svg';
import posterEC from '../assets/collage/2023_EvianChrist/poster.jpg';
import gifEC from '../assets/collage/2023_EvianChrist/josh.gif';
import posterSky from '../assets/collage/2023_SkyH1-Woesum/poster.jpeg';
import gifSkyDj from '../assets/collage/2023_SkyH1-Woesum/dj.gif';
import gifSkyCrowd from '../assets/collage/2023_SkyH1-Woesum/crowd.gif';
import posterMarkyB from '../assets/collage/2023_MarkyB-Seretide/poster.jpeg';
import sooaxka from '../assets/collage/2023_MarkyB-Seretide/sooaxka.png';

function Collage() {
    const mediaList = [
        {
	    column: 'left',
	    url: posterEC,
            customStyles: {
            }
        },
        {
	    column: 'right',
            url: gifEC,
            customStyles: {
		marginLeft: 'calc(1% * 25)',
            }
        },
        {
	    column: 'left',
            url: gifSkyDj,
            customStyles: {
		paddingTop: 'calc(1% * 30)',
		marginLeft: 'calc(1% * 25)',
            }
        },
        {
	    column: 'right',
            url: posterSky,
            customStyles: {
		paddingTop: 'calc(1% * 10)',
            }
        },
        {
	    column: 'left',
            url: gifSkyCrowd,
            customStyles: {
		marginTop: 'calc(1% * -30)',
		marginRight: 'calc(1% * 50)',
            }
        },
        {
	    column: 'right',
            url: posterMarkyB,
            customStyles: {
		position: 'absolute',
		paddingTop: 'calc(260%)',
		marginLeft: 'calc(-50%)',
            }
        },
        {
	    column: 'right',
            url: sooaxka,
            customStyles: {
		width: '50%',
		paddingTop: 'calc(50%)',
		marginLeft: 'calc(50%)',
            }
        }
    ];

    return (
        <div className="collage-container">
            <div className="column">
                {mediaList.filter(media => media.column === 'left').map((media, index) => (
                    <img
                        key={index}
                        src={media.url}
                        alt="collage media"
                        style={media.customStyles}
                    />
                ))}
            </div>
            <div className="column">
                {mediaList.filter(media => media.column === 'right').map((media, index) => (
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

