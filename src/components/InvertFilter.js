import React from 'react';

function InvertFilter() {
    return (
	   <svg width="0" height="0" style={{"position": "absolute"}}>
	    <filter id="invert-colors">
	    <feColorMatrix in="SourceGraphic" type="matrix" values="-1 0 0 0 1 
                                                              0 -1 0 0 1 
                                                              0 0 -1 0 1
                                                              0 0 0 1 0"/>
	    </filter>
	</svg>
    );
}

export default InvertFilter;

