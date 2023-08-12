import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../videos/video-1.mp4' autoPlay loop muted />
            <h1>BJSYS Hotel Managements</h1>
        
            <p>Otimize  seus sistemas </p>
            
            <h5>Uberlândia - MG</h5>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    ASSISTA O TRAILER <i className='far fa-play-circle' />
                </Button>


            </div>
        </div>
    );
}

export default HeroSection;