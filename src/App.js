import React from 'react';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import { ReactComponent as TitleSVG } from './assets/hawkchild_diy.svg'
import PhotoCollage from './components/PhotoCollage';

function App() {
    return (
        <div className="Main">
            <EmptyScreen percentage={50} />
	    <TitleSVG className="Title" />
            <PhotoCollage />
            <EmptyScreen percentage={100} />
        </div>
    );
}

export default App;

