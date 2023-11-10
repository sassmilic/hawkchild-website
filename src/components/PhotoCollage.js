import React from 'react';
import './PhotoCollage.css';
import EmptyScreen from './EmptyScreen';
import VerticalColumns from './VerticalColumns';
import HorizontalRow from './HorizontalRow';


function Collage(props) {

    // Import all images
    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        // Remove './' and file extension from the key
        const key = item.replace('./', '').replace(/\.\w+$/, '');
        images[key] = r(item);
      });
      return images;
    }

    const images = importAll(require.context('./../assets/collage', false, /\.(png|jpe?g|gif)$/));

    // Usage
    // <img src={images['doggy']} />


    const firstColumnList = [
        {
	        url: images['p01'],
            customStyles: {
            }
        },
        {
            url: images['g03'],
            customStyles: {
		        paddingTop: 'calc(2%)',
		        paddingLeft: 'calc(25%)',
            }
        },
        {
            url: images['g02'],
            customStyles: {
                marginTop: 'calc(-30%)',
                width: '75%',
            }
        }
    ];
   
    const secondColumnList = [
        {
            url: images['g01'],
            customStyles: {
                //width: '75%',
		        //marginLeft: 'calc(25%)',
            }
        },
        {
            url: images['p02'],
            customStyles: {
		        marginTop: 'calc(-25%)',
                width: '75%',
                alignSelf: 'center'
            }
        },
        {
            url: images['p03'],
            customStyles: {
		        paddingTop: 'calc(2%)',
            }
        }
    ];

    const rowMediaList1 = [
        {
            url: images['p04'],
            customStyles: {
                flex: '2',
            }
        },
        {
            url: images['p05'],
            customStyles: {
            }
        }
    ];

    const rowMediaList2 = [
        {
            url: images['p07'],
            customStyles: {
            }
        },
        {
            url: images['p06'],
            customStyles: {
            }
        }
    ];

    const rowMediaList3 = [
        {
            url: images['g04'],
            customStyles: {
            }
        },
        {
            url: images['g05'],
            customStyles: {
            }
        },
        {
            url: images['g06'],
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
                    marginTop: 'calc(3%)'
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

