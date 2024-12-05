// import React from "react";
import "./Typewritercomponent.css"
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => (
    <div className='typewritercom'>
       <Typewriter
    options={{
    strings: ['Mooday'],
    autoStart: true,
    loop: true,
}}
/> 
    </div>
    
)

export default TypewriterComponent;

