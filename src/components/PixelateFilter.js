import React from 'react';

function PixelateFilter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
                <filter id="pixelate" x="0" y="0">
                    <feFlood x="1" y="1" height="1" width="1"/>
                    <feComposite width="5" height="5"/>
                    <feTile result="a"/>
                    <feComposite in="SourceGraphic" in2="a" operator="in"/>
                    <feMorphology operator="dilate" radius="2"/>
                </filter>
            </defs>
        </svg>
    );
}

export default PixelateFilter;

