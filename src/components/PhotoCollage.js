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
import posterDark0Femi from '../assets/collage/2022_Dark0-Femi/poster.jpeg';
import hashimDark0 from '../assets/collage/2022_Dark0-Femi/hashim_and_dark0.png';
import gifEcDj from '../assets/collage/2022_Dark0-Femi/josh_dj.gif';
import gifDark0Dj1 from '../assets/collage/2022_Dark0-Femi/crowd_dark0_pink.gif';
import gifDark0Dj2 from '../assets/collage/2022_Dark0-Femi/dark0_dj.gif';


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
		        paddingTop: 'calc(2%)',
		        paddingLeft: 'calc(25%)',
            }
        },
        {
            url: gifSkyCrowd,
            customStyles: {
                marginTop: 'calc(-30%)',
                width: '75%',
            }
        }
    ];
   
    const secondColumnList = [
        {
            url: gifEC,
            customStyles: {
                //width: '75%',
		        //marginLeft: 'calc(25%)',
            }
        },
        {
            url: passportEC,
            customStyles: {
		        marginTop: 'calc(-25%)',
                width: '75%',
                alignSelf: 'center'
            }
        },
        {
            url: posterSky,
            customStyles: {
		        paddingTop: 'calc(2%)',
            }
        }
    ];

    const rowMediaList1 = [
        {
            url: posterMarkyB,
            customStyles: {
                flex: '3',
		        marginTop: 'calc(2%)',
            }
        },
        {
            url: sooaxka,
            customStyles: {
            }
        }
    ];

    const rowMediaList2 = [
        {
            url: posterDark0Femi,
            customStyles: {
            }
        },
        {
            url: hashimDark0,
            customStyles: {
            }
        }
    ];

    const rowMediaList3 = [
        {
            url: gifEcDj,
            customStyles: {
            }
        },
        {
            url: gifDark0Dj1,
            customStyles: {
            }
        },
        {
            url: gifDark0Dj2,
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
                mediaList={rowMediaList1}
                containerStyles={{
                }}
                invisibleCount={1}
	        />
            <HorizontalRow
                mediaList={rowMediaList2}
                containerStyles={{
                    marginTop: 'calc(10%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList3}
                containerStyles={{
                    marginTop: 'calc(10%)'
                }}
	        />
            <EmptyScreen percentage={100} />
        </div>
    );
}

export default Collage;

