import React from 'react';
import art from '../Images/floor(al)ed.png'
import art2 from '../Images/the-stash copy.png'

function AboutMe() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 py-5 px-10 mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 mb-5">
                    <h2 className="text-3xl font-semibold text-violet-50 absolute -mt-3 ml-40">A Bit More About Me</h2>
                </div>
                <p className="mb-8">
                    I hope to utilize my technical skills and knowledge to make a positive impact on the world, using technology to solve real-world
                    problems. My aim is to create innovative and effective solutions that will improve people's lives and enhance their experiences,
                    and I am committed to working collaboratively with like-minded professionals to achieve our common goals.
                    <br />
                    <p className="font-semibold text-violet-950">Ultimately, I aspire to be part of a team that is making a meaningful difference in the world.</p>
                </p>
                <div className="flex flex-row justify-evenly mb-8">
                    <img src={art} alt="art" className="w-1/5 border border-violet-300 hover:border-pink-400 drop-shadow-lg rounded-md" />
                    <img src={art2} alt="art2" className="w-1/5 border border-violet-300 hover:border-pink-400 drop-shadow-lg rounded-md" />
                    <img src="https://via.placeholder.com/150" alt="Placeholder 3" className="w-1/5 border border-violet-300 hover:border-pink-400 drop-shadow-lg rounded-md" />
                </div>
                <p className="mb-4">
                    I am an artist at heart, which directed me to choose Graphic Design as a major in college. While I do prefer to create art that is more
                    abstract, I am thankful for my digital design education, as it has been a huge asset during my web development journey. I love creating 
                    UX that is sleek, simple, and pleasant to interact with.
                </p>
                <p className="">
                    In addition to creating art, I love going on adventures with my dog, seeing live music, and consuming fiction in the form of books, television 
                    and movies. In my opinion, there's no better escape than immersing yourself in a carefully-curated fantasy world.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
