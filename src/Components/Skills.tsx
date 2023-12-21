

function Skills() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 sm:p-4 pt-10 sm:pt-5 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 ml-0 max-w-7xl py-5 px-10 sm:px-3 h-auto mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 sm:-ml-20 mb-10 sm:mb-5 border-r border-y border-pink-400 rounded-r-md">
                    <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-violet-50 absolute -mt-3 ml-40 sm:ml-5">Skills and Notable Experience</h2>
                </div>
                <div className="h-5/6 sm:h-auto lg:px-3 flex flex-col justify-evenly text-lg md:text-base sm:text-sm">
                    <div className="w-full max-w-6xl px-10 sm:px-0 mx-auto">
                        <div className="w-1/6 sm:w-1/3 mr-6 sm:mr-2 float-left">
                            <ul className="list-disc pl-5 text-violet-950 sm:mb-5">
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
                        <div className="w-5/6 sm:w-full">
                            <p className="mb-5">
                                <p className="font-semibold text-violet-950">Full Stack Engineer at ChattyKathi</p>
                                Worked alongside the company founder to create many core features of the product.
                                Built and maintained an admin environment and social profiles for members,
                                including a community page where users could interact.
                                Wrote strong copy for instructional walkthroughs, socials, and the marketing website.
                                Main languages and tech used during this time: React, TypeScript, Jest, FireBase and GitHub.
                            </p>
                            <p className="mb-5">
                                <p className="font-semibold text-violet-950">Mentor for Computer Science student, UVA Darden. (3 months)</p>
                                Acted as a mentor to a student for a part of their graduate requirements. Taught them to apply concepts to real
                                coding problems, created homework, and gave final assessment.
                            </p>
                            <p className="mb-5">
                                <p className="font-semibold text-violet-950">Full Stack Engineer at CLMBR</p>
                                Overcame many challenges at this fast-paced startup, shortly after graduating from software engineering bootcamp.
                            </p>
                            <p className="mb-5">
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
        </div>
    );
}

export default Skills;
