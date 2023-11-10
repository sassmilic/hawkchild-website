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

    console.log(images);


    const firstColumnList = [
        {
	        url: images['p01'],
            customStyles: {
            }
        },
        {
            url: images['g03'],
            customStyles: {
		        paddingLeft: 'calc(25%)',
            }
        },
        {
            url: images['g02'],
            customStyles: {
                paddingRight: '50%',
            }
        }
    ];
   
    const secondColumnList = [
        {
            url: images['g01'],
            customStyles: {
                width: '100%',
            }
        },
        {
            url: images['p02'],
            customStyles: {
                width: '50%',
            }
        },
        {
            url: images['p03'],
            customStyles: {
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

    const rowMediaList4 = [
        {
            url: images['p21'],
            customStyles: {
            }
        },
        {
            url: images['g09'],
            customStyles: {
            }
        },
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
                    marginTop: 'calc(15%)'
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
            <HorizontalRow
                mediaList={rowMediaList4}
                containerStyles={{
                    marginTop: 'calc(16%)'
                }}
	        />
            <EmptyScreen percentage={100} />
        </div>
    );
}

export default Collage;

