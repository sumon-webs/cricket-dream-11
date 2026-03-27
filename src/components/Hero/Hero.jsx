import React from 'react';
import BgShadow from "../../assets/bg-shadow.png"
import Banner from "../../assets/banner-main.png"

const Hero = () => {
    return (
        <div
            className="hero md:h-[500px] container mx-auto rounded-2xl overflow-hidden md:px-0"
            style={{
                borderRadius: '9px',
                backgroundImage:
                    `url(${BgShadow})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="hero-overlay md:px-0"></div>
            <div className="hero-content text-neutral-content text-center md:px-0">
                <div className=" flex flex-col justify-center items-center space-y-4">
                    <img src={Banner} alt="" />
                    <h1 className=' text-2xl md:text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p>Beyond Boundaries Beyond Limits</p>
                    <button className="btn btn-warning">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;