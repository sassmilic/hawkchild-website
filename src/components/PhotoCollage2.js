import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

// Import all images
const imageFilenames = new Set([
  'p01', 'g03', 'g01', 'p02', 'p03', 'p04',
  'p05', 'p06', 'p07', 'g04', 'g05', 'g06',
  'p21', 'g11', 'g12', 'g09', 'p19', 'g16',
  'p24', 'p26', 'p25', 'p28', 'p29', 'p30',
  'p32-2', 'p31-2', 'p33', 'g18', 'g19', 'g23',
  'p35', 'p36', 'p38', 'g21', 'p37', 'g22',
  'p39', 'p40', 'p46', 'p47', 'p45', 'p48',
  'p48', 'p44', 'p49', 'p27'
]);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.replace('./', '').replace(/\.\w+$/, '');
    if (imageFilenames.has(key)) {
        images[key] = r(item);
    }
  });
  return images;
}

const images = importAll(require.context('./../assets/collage', false, /\.(png|jpe?g|gif)$/));
const totalImages = Object.keys(images).length;

export default function PhotoCollage() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax pages={4}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer offset={0} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={images['p01']} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

