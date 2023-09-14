import React from 'react';
import headshot from '../Images/headshot.jpg';

function Home() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 py-5 px-10 mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 mb-10 border-r border-y border-pink-400 rounded-r-md">
                    <h2 className="text-3xl font-semibold text-violet-50 absolute -mt-3 ml-40">Hello! I'm Mary Beth -</h2>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-1/2 mr-20">
                        <p className="text-lg text-right leading-relaxed">
                            - a passionate software developer with over 2 years of professional experience.
                            I specialize in creating clean, user-centric applications that not only function well, but also look great.
                            <br /> <br />
                            I strive to make an impact through my work. My skill set ranges from full-stack development to a keen eye for design.
                            This portfolio is a showcase of my journey and capabilities in the tech world.
                            <br />
                            Feel free to look around -- let's connect to build something extraordinary!
                        </p>
                    </div>
                    <div className="w-1/2 mt-10">
                        <img className="w-5/6 border border-violet-300 drop-shadow-lg rounded-md" src={headshot} alt='headshot' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
