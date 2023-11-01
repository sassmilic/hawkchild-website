import React from 'react';

export default function InvertAndPixelizeFilter() {
    return (
	   <svg width="0" height="0" style={{"position": "absolute"}}>
	    <filter id="InvertAndPixelize">
            {/* increase contrast */}
            <feComponentTransfer in="SourceGraphic" out="out3">
                <feFuncR type="linear" slope="2" />
                <feFuncG type="linear" slope="2" />
                <feFuncB type="linear" slope="1" />
            </feComponentTransfer>
            {/* invert colors */}
	        <feColorMatrix
                in="out3"
                result="out1"
                type="matrix"
                values="-1 0 0 0 1 
                        0 -1 0 0 1 
                        0 0 -1 0 1
                        0 0 0 1 0"/>

            {/* pixelation */}
            <feFlood x="1" y="1" height="1" width="1"/>
            <feComposite width="5" height="5"/>
            <feTile result="a"/>
            <feComposite in="out1" in2="a" operator="in"/>
            <feMorphology operator="dilate" radius="2" result="out2"/>
            {/* small Gaussian blur */}
            <feGaussianBlur in="out2" stdDeviation="1" result="out3"/>
	    </filter>
	</svg>
    );
}
