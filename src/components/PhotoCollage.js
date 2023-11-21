import { React, useState, useEffect } from 'react';
import './PhotoCollage.css';
import EmptyScreen from './EmptyScreen';


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
    const totalImages = 0; // TODO: CHANGE !!!
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

    return (
        <>
        <EmptyScreen percentage={50} />
        <div className="collage-container" >
            <div className="columns">
                <div className="column">
                    <img
                        src={images['p01']}
                        alt="Evian Christ Poster"
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={images['g03']}
                        alt="Woesum + Sky H1 Crowd"
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="column">
                    <img
                        src={images['g01']}
                        alt="Evian Christ Finger"
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={images['p02']}
                        alt="Evian Christ Passport"
                        style={{
                            width: '50%'
                        }}
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={images['p03']}
                        alt="Woesum + Sky H1 Poster"
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>
            <div className="row">
                <div className="invisible-element"></div>
                <img
                    src={images['p04']}
                    alt="Marky B + Seretide Poster"
                    style={{
                        flex: '2'
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p05']}
                    alt="Sooaxka"
                    style={{
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="row">
                <img
                    src={images['p06']}
                    alt="Hashim + Dark0"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p07']}
                    alt="Dark0 + Femi Poster"
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="row">
                <img
                    src={images['g04']}
                    alt="Evian Christ DJ"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['g05']}
                    alt="Pink Crowd"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['g06']}
                    alt="Dark0 DJ"
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="columns">
                <div className="column">
                    <img
                        src={images['p21']}
                        alt="Clouds + Affxwrks Poster"
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={images['g11']}
                        alt="Clouds + Affxwrks Crowd 1"
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="column">
                    <img
                        src={images['g12']}
                        alt="Clouds + Affxwrks Crowd 2"
                        onLoad={handleImageLoad}
                    />
                    <img
                        src={images['g09']}
                        alt="Clouds + Affxwrks gif"
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>
            <div className="row">
                <img
                    src={images['p19']}
                    alt="Oli XL + Doss Poster"
                    style={{
                        marginRight: "25%"
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="row" style={{marginTop: "-14%"}}>
                <img
                    src={images['g16']}
                    alt="Oli XL DJ"
                    style={{
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p24']}
                    alt="Oli XL + Doss Crowd"
                    style={{
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <img
                src={images['p26']}
                alt="Casual Gabberz Poster"
                style={{
                    marginTop: '17%'
                }}
                onLoad={handleImageLoad}
            />
            <img
                src={images['p25']}
                alt="Casual Gabberz Pic"
                style={{
                    marginRight: '25%'
                }}
                onLoad={handleImageLoad}
            />
            <div className="row">
                <img
                    src={images['p28']}
                    alt="Casual Gabberz DJ"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p27']}
                    alt="Casual Gabberz Crowd"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p29']}
                    alt="Casual Gabberz Backstage"
                    onLoad={handleImageLoad}
                />
            </div>
            <img
                src={images['p30']}
                alt="Mechatok + Malibu Poster"
                style={{
                    width: '40%',
                    alignSelf: "center",
                    marginBottom: "-50%",
                    zIndex: "2"
                }}
                onLoad={handleImageLoad}
            />
            <div className="row" style={{gap: 0}}>
                <img
                    src={images['p32-2']}
                    alt="Mechatok + Malibu Sightseeing"
                    style={{
                        alignSelf: "flex-start"
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p31-2']}
                    alt="Mechatok + Malibu DJ [Green]"
                    style={{
                        flex: 2
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="column">
                <img
                    src={images['p33']}
                    alt="Trance Party Decade Poster 1"
                    style={{
                        width: '49%',
                        alignSelf: 'center'
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['g18']}
                    alt="Trance Party Decade Crowd"
                    style={{
                        width: '49%',
                        alignSelf: 'center'
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['g19']}
                    alt="Trance Party Decade Poster gif"
                    style={{
                        width: '49%',
                        alignSelf: 'center'
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <img
                src={images['g23']}
                alt="Nassim Taleb gif"
                onLoad={handleImageLoad}
            />
            <img
                src={images['p35']}
                alt="Trance Party 6 Poster"
                onLoad={handleImageLoad}
            />
            <div className="row">
                <img
                    src={images['p36']}
                    alt="Trance Party 6 Poster 2"
                    style={{
                        marginLeft: '25%',
                    }}
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p38']}
                    alt="Trance Party 6 Set Times"
                    style={{
                        marginRight: '25%',
                    }}
                    onLoad={handleImageLoad}
                />
            </div>
            <img
                src={images['g21']}
                alt="Trance Party 6 Fire Engine gif"
                onLoad={handleImageLoad}
            />
            <img
                src={images['p37']}
                alt="Trance Party 6 Fire Engine pic"
                style={{
                    marginTop: "-14%"
                }}
                onLoad={handleImageLoad}
            />
            <img
                src={images['g22']}
                alt="Trance Party 6 Crowd"
                style={{
                    marginTop: "-14%"
                }}
                onLoad={handleImageLoad}
            />
            <img
                src={images['p39']}
                alt="Drain Gang Poster"
                onLoad={handleImageLoad}
            />
            <img
                src={images['p40']}
                alt="Hashim + Drain Gang Poster"
                style={{
                    marginRight: '25%'
                }}
                onLoad={handleImageLoad}
            />
            <div className="row">
                <img
                    src={images['p46']}
                    alt="Mssingno et al. Poster"
                    onLoad={handleImageLoad}
                />
                <img
                    src={images['p47']}
                    alt="Kamixlo"
                    onLoad={handleImageLoad}
                />
            </div>
            <img
                src={images['p45']}
                alt="Yung Lean Crowd 1"
                onLoad={handleImageLoad}
            />
            <img
                src={images['p48']}
                alt="Yung Lean Poster"
                style={{
                    width: "50%",
                    alignSelf: "center"
                }}
                onLoad={handleImageLoad}
            />
            <img
                src={images['p49']}
                alt="Bladee"
                onLoad={handleImageLoad}
            />
            <img
                src={images['p44']}
                alt="Yung Lean Crowd"
                onLoad={handleImageLoad}
            />
        </div>
        <EmptyScreen percentage={100} />
        </>
    );
}

export default Collage;

