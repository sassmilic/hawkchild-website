import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ url }) => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);

    useEffect(() => {
        // Initialize WaveSurfer
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            cursorColor: 'navy',
            barWidth: 2,
            barRadius: 3,
            responsive: true,
            height: 100,
            normalize: true,
            backend: 'WebAudio'
        });

        // Load audio file
        wavesurfer.current.load(url);

        // Cleanup function to destroy wavesurfer instance
        return () => wavesurfer.current.destroy();
    }, [url]);

    // Handle play/pause
    const handlePlayPause = () => {
        wavesurfer.current.playPause();
    };

    return (
        <div>
            <div id="waveform" ref={waveformRef}></div>
            <button onClick={handlePlayPause}>Play/Pause</button>
        </div>
    );
};

export default AudioPlayer;

