import React from 'react';

function Skills() {
    return (
        <div className="bg-violet-50 p-8 pt-20 h-screen w-screen flex justify-center">
            <div className="max-w-xl mx-auto">

                <h2 className="text-3xl font-semibold mb-6 text-violet-950">Skills</h2>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium mb-4 text-violet-900">Languages & Technologies</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Ruby on Rails</li>
                        <li>GoLang</li>
                        <li>Python</li>
                        <li>Java</li>
                        {/*... add as many as you want */}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-medium mb-4 text-violet-900">Notable Previous Experience</h3>
                    <p className="text-gray-600 mb-4">
                        Software Engineer at TechCorp: Worked on developing scalable microservices using Node.js and Kubernetes.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Frontend Developer at WebWorks: Led the migration from vanilla JS to React, improving site performance by 30%.
                    </p>
                    <p className="text-gray-600">
                        Backend Engineer at DataHub: Implemented secure authentication patterns and enhanced API response times.
                    </p>
                    {/*... add more experiences as needed */}
                </div>

            </div>
        </div>
    );
}

export default Skills;
