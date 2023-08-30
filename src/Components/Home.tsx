import React from 'react';
import headshot from '../Images/headshot.jpg';

function Home() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center">
            <div className="w-2/3 h-2/3 py-20 px-10 mx-auto text-center flex flex-row bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="w-1/2 mr-20">
                    <h1 className="text-4xl font-bold mb-6 text-violet-900">Hello! <br /> I'm Mary Beth.</h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Thanks for being here ✨ <br />
                        <br />
                        I am a full stack web developer with more than 2 years of experience, and a passion for front end programming. <br />
                        Take a look around, and feel free to get in touch!
                    </p>
                </div>
                <div className="w-1/2">
                    <img className="border border-violet-300 drop-shadow-lg rounded-md" src={headshot} alt='headshot' />
                </div>

            </div>
        </div>
    );
}

export default Home;
