import { React, useState, useEffect } from 'react';
import './PhotoCollage.css';
import EmptyScreen from './EmptyScreen';
import VerticalColumns from './VerticalColumns';
import SingleColumn from './SingleColumn';
import HorizontalRow from './HorizontalRow';


function Collage({ onLoadComplete }) {

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
    //const totalImages = Object.keys(images).length;
    const totalImages = 31; // TODO: CHANGE !!!
    const [loadedImages, setLoadedImages] = useState(0);

    const handleImageLoad = () => {
        console.log("Calling `handleImageLoad`...");
        setLoadedImages(prev => prev + 1);
    };

    useEffect(() => {
        console.log("HERE");
        console.log("loadedImage count: ", loadedImages);
        console.log("total image count:", totalImages);
        if (loadedImages === totalImages) {
            onLoadComplete();
        }
    }, [loadedImages]);


    const firstColumnList = [
        {
	        url: images['p01'],
            customStyles: {
            }
        },
        {
            url: images['g03'],
            customStyles: {
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

    const rowMediaList5 = [
        {
            url: images['g11'],
            customStyles: {
            }
        },
        {
            url: images['g12'],
            customStyles: {
            }
        },
    ];

    const rowMediaList6 = [
        {
            url: images['p19'],
            customStyles: {
            }
        }
    ];

    const rowMediaList7 = [
        {
            url: images['g16'],
            customStyles: {
            }
        },
        {
            url: images['p24'],
            customStyles: {
            }
        },
    ];

    const rowMediaList8 = [
        {
            url: images['p18'],
            customStyles: {
            }
        }
    ];

    const rowMediaList9 = [
        {
            url: images['p25'],
            customStyles: {
            }
        }
    ];

    const rowMediaList10 = [
        {
            url: images['p28'],
            customStyles: {
            },
        },
        {
            url: images['p27'],
            customStyles: {
            },
        },
        {
            url: images['p29'],
            customStyles: {
            },
        }
    ];

    const rowMediaList11 = [
        {
            url: images['p16'],
            customStyles: {
            }
        }
    ];

    const firstColumnList2 = [
        {
	        url: images['p31-2'],
            customStyles: {
            }
        },
    ];
   
    const secondColumnList2 = [
        {
            url: images['p32-2'],
            customStyles: {
                marginTop: '-32%'
            }
        },
    ];
    
    const columnMediaList = [
        {
            url: images['p33'],
            customStyles: {
                width: '50%'
            }
        },
        {
            url: images['g18'],
            customStyles: {
                width: '50%',
                marginTop: '2%'
            }
        },
        {
            url: images['g19'],
            customStyles: {
                width: '50%',
                marginTop: '2%'
            }
        }
    ];

    const rowMediaList12 = [
        {
            url: images['g23'],
            customStyles: {
            }
        }
    ];



    return (
        <div className="collage-container">
            <div id="empty-screen-1" />
            <EmptyScreen percentage={50} />
            <VerticalColumns 
                leftMediaList={firstColumnList}
                rightMediaList={secondColumnList}
                onImageLoad={handleImageLoad}
            />
            <HorizontalRow
                mediaList={rowMediaList1}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(18%)',
                    alignItems: 'stretch'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList2}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(9%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList3}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(10%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList4}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList5}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(2%)'
                }}
	        />
            {/* Oli XL */}
            <HorizontalRow
                mediaList={rowMediaList6}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)',
                    marginRight: 'calc(25%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList7}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(1%)'
                }}
	        />
            {/* Casual Gabberz */}
            <HorizontalRow
                mediaList={rowMediaList8}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(33%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList9}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)',
                    marginRight: 'calc(25%)'
                }}
	        />
            <HorizontalRow
                mediaList={rowMediaList10}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)',
                }}
	        />
            {/* Mechatok & Malibu */}
            <HorizontalRow
                mediaList={rowMediaList11}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)',
                    marginRight: 'calc(25%)'
                }}
	        />
            <VerticalColumns 
                leftMediaList={secondColumnList2}
                rightMediaList={firstColumnList2}
                onImageLoad={handleImageLoad}
            />
            {/* TP Decade */}
            <SingleColumn
                mediaList={columnMediaList}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(33%)',
                }}
	        />
            {/* Nassim Taleb */}
            <HorizontalRow
                mediaList={rowMediaList12}
                onImageLoad={handleImageLoad}
                containerStyles={{
                    marginTop: 'calc(16%)',
                }}
	        />
            <EmptyScreen percentage={100} />
        </div>
    );
}

export default Collage;

