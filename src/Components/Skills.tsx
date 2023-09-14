import React from 'react';

function Skills() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 py-5 mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 mr-10 mb-5 border-r border-y border-pink-400 rounded-r-md">
                    <h2 className="text-3xl font-semibold text-violet-50 absolute -mt-3 ml-40">Skills and Notable Experience</h2>
                </div>
                <div className="flex flex-row w-full px-10">
                    <div className="w-1/6 mr-6">
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

                    <div className="w-5/6">
                        {/* <h3 className="text-2xl font-medium mb-4 text-violet-900">Notable Previous Experience</h3> */}
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Full Stack Engineer at ChattyKathi</p>
                            Worked alongside the company founder to create many core features of the product.
                            Built and maintained an admin environment and social profiles for members,
                            including a community page where users could interact.
                            Wrote strong copy for instructional walkthroughs, socials, and the marketing website.
                            Main languages and tech used during this time: React, TypeScript, Jest, FireBase and GitHub.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Mentor for Computer Science student, UVA Darden. (3 months)</p>
                            Acted as a mentor to a student for a part of their graduate requirements. Taught them to apply concepts to real
                            coding problems, created homework, and gave final assessment.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Full Stack Engineer at CLMBR</p>
                            Overcame many challenges at this fast-paced startup, shortly after graduating from software engineering bootcamp.
                        </p>
                        <p className="mb-4">
                            <p className="font-semibold text-violet-950">Flatiron School of Software Engineering (Denver, CO)</p>
                            Earned a comprehensive education in all concepts of full stack engineering.
                            Languages and technologies included: Ruby on Rails,
                            JavaScript, TypeScript, React, Node, HTML, CSS, and more.
                        </p>
                    </div>
                </div>
                <div className="px-5 py-1 w-full border-y border-pink-400">
                    <p>As a relentless innovator, my focus is set on mastering emerging technologies and applying them to solve real-world challenges.
                        Take for instance my recent deep dive into Blockchain -- fresh out of a specialized dApp bootcamp, I've architected and deployed a robust token exchange on multiple Ethereum networks,
                        all coded in Solidity. For me, this isn't just another project;
                        <p className="font-semibold inline text-violet-950"> it's a testament to my ability to rapidly acquire, apply, and innovate using new skills. </p>
                        Now, I'm leveraging this expertise to push the boundaries of what's possible with Smart Contracts, NFTs, and the expansive Web3 ecosystem.</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
