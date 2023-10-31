import React from 'react';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import { ReactComponent as TitleSVG } from './assets/hawkchild_diy.svg'
import PhotoCollage from './components/PhotoCollage';
import PixelateFilter from './components/PixelateFilter';

function App() {
    return (
	    <div className="main">
	    <PixelateFilter />
	    <TitleSVG className="title" />
	    <div className="background">
            	<EmptyScreen percentage={50} />
            	<PhotoCollage />
            	<EmptyScreen percentage={100} />
	    </div>
        </div>
    );
}

export default App;

