import React from 'react';
import './PhotoCollage.css';
import { ReactComponent as Title} from '../assets/hawkchild_diy.svg';
import VerticalColumns from './VerticalColumns';
import HorizontalRow from './HorizontalRow';
// Image imports
import posterEC from '../assets/collage/2023_EvianChrist/poster.jpg';
import gifEC from '../assets/collage/2023_EvianChrist/josh.gif';
import posterSky from '../assets/collage/2023_SkyH1-Woesum/poster.jpeg';
import gifSkyDj from '../assets/collage/2023_SkyH1-Woesum/dj.gif';
import gifSkyCrowd from '../assets/collage/2023_SkyH1-Woesum/crowd.gif';
import posterMarkyB from '../assets/collage/2023_MarkyB-Seretide/poster.jpeg';
import sooaxka from '../assets/collage/2023_MarkyB-Seretide/sooaxka.png';

function Collage() {
    const firstColumnList = [
        {
	        url: posterEC,
            customStyles: {
            }
        },
        {
            url: gifSkyDj,
            customStyles: {
		        paddingTop: 'calc(25%)',
                width: '75%',
                alignSelf: 'flex-start',
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
            url: posterSky,
            customStyles: {
		paddingTop: 'calc(1% * 10)',
            }
        }
    ];

    const rowMediaList = [
        {
            url: posterMarkyB,
            customStyles: {
                width: '50%',
            }
        },
        {
            url: sooaxka,
            customStyles: {
		alignSelf: 'center',
            }
        }
    ];

    return (
        <div className="collage-container">
            <VerticalColumns 
                leftMediaList={firstColumnList}
                rightMediaList={secondColumnList}
            />
            <HorizontalRow
                mediaList={rowMediaList}
                containerStyles={{
                    justifyContent: "flex-end",
                }}
	        />
        </div>
    );
}

export default Collage;

