import React from 'react';
import './PhotoCollage.css';
import EmptyScreen from './EmptyScreen';
import VerticalColumns from './VerticalColumns';
import HorizontalRow from './HorizontalRow';
// Image imports
import posterEC from '../assets/collage/2023_EvianChrist/poster.jpg';
import gifEC from '../assets/collage/2023_EvianChrist/josh.gif';
import passportEC from '../assets/collage/2023_EvianChrist/josh_passport.jpg';
import posterSky from '../assets/collage/2023_SkyH1-Woesum/poster.jpeg';
import gifSkyDj from '../assets/collage/2023_SkyH1-Woesum/dj.gif';
import gifSkyCrowd from '../assets/collage/2023_SkyH1-Woesum/crowd.gif';
import posterMarkyB from '../assets/collage/2023_MarkyB-Seretide/poster.jpeg';
import sooaxka from '../assets/collage/2023_MarkyB-Seretide/sooaxka.png';

function Collage(props) {
    const firstColumnList = [
        {
	        url: posterEC,
            customStyles: {
            }
        },
        {
            url: gifSkyDj,
            customStyles: {
		        //paddingTop: 'calc(25%)',
		        paddingTop: '15px',
                alignSelf: 'flex-end',
		        paddingLeft: 'calc(25%)',
            }
        },
        {
            url: gifSkyCrowd,
            customStyles: {
                marginTop: 'calc(-30%)',
                width: '50%',
            }
        }
    ];
   
    const secondColumnList = [
        {
            url: gifEC,
            customStyles: {
                width: '75%',
		        marginLeft: 'calc(25%)',
            }
        },
        {
            url: passportEC,
            customStyles: {
		        marginTop: 'calc(-25%)',
                width: '75%',
            }
        },
        {
            url: posterSky,
            customStyles: {
		        paddingTop: '15px',
            }
        }
    ];

    const rowMediaList = [
        {
            url: posterMarkyB,
            customStyles: {
                flex: '2'
            }
        },
        {
            url: sooaxka,
            customStyles: {
            }
        }
    ];

    return (
        <div className="collage-container" id={props.id} style={props.style}>
            <div id="empty-screen-1" />
            <EmptyScreen percentage={50} />
            <VerticalColumns 
                leftMediaList={firstColumnList}
                rightMediaList={secondColumnList}
            />
            <HorizontalRow
                mediaList={rowMediaList}
                containerStyles={{
                }}
                invisibleCount={1}
	        />
            <EmptyScreen percentage={100} />
        </div>
    );
}

export default Collage;

