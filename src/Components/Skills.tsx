import React from 'react';

function Skills() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 py-5 px-10 mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 mb-5">
                    <h2 className="text-3xl font-semibold text-violet-50 absolute -mt-3 ml-40">Skills and Notable Experience</h2>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-1/5 mr-10">
                        {/* <h3 className="text-2xl font-medium mb-4 text-violet-900">Languages <br /> & Technologies</h3> */}
                        <ul className="list-disc pl-5 text-violet-950">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Solidity</li>
                            <li>BlockChain</li>
                            <li>Ganache</li>
                            <li>UX/UI</li>
                            <li>FireBase</li>
                            <li>GitHub</li>
                            <li>TailWind/CSS</li>
                            <li>JSON Databases</li>
                            <li>Jest/JS Testing</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                    <div className="w-4/5">
                        {/* <h3 className="text-2xl font-medium mb-4 text-violet-900">Notable Previous Experience</h3> */}
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Full Stack Engineer at ChattyKathi</p>
                            The main product was an AI named Kathi who learned about users of the app and
                            asked tailored questions in order to foster connection and belonging within large organizations. Main languages and tech used
                            included React, TypeScript, Jest, FireBase and GitHub.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Mentor for Computer Science student from UVA Darden.</p>
                            I directly mentored them for 3 months as a part of their
                            graduate requirements. Regularly worked while on calls with them in order to teach them using real programming
                            situations. Assigned homework and created a final assessment for them to complete and return to their professor.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Full Stack Engineer at CLMBR</p>
                            Added to the brand new engineering team at a fast-paced startup, shortly after graduating from software engineering bootcamp.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Flatiron School of Software Engineering (Denver, CO)</p>
                            Earned a comprehensive education in all concepts of full stack engineering.
                            Languages and technologies included in the syllabus were: Ruby on Rails,
                            JavaScript, TypeScript, React, Node, HTML, CSS, and more.
                        </p>
                    </div>
                </div>
                <p>As a creative and self-motivated individual, I am dedicated to continuous learning and staying up-to-date with the latest advancements in the field.
                    As an example, I recently completed a Blockchain bootcamp where I learned to create decentralized apps coded in Solidity.
                    During this time, I created a fully-functioning token exchange which is deployed to several Ethereum networks.
                    Now, I'm using my knowledge to further explore the possibilities of Smart Contracts, NFTs, and the rest of what Web3 has to offer.
                </p>
            </div>
        </div>
    );
}

export default Skills;
