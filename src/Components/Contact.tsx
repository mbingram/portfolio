import React from 'react';

function Contact() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 pt-10 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 py-5 px-10 mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 mb-5">
                    <h2 className="text-3xl font-semibold text-violet-50 absolute -mt-3 ml-40">Let's Get in Touch!</h2>
                </div>
                <div className="flex flex-row w-full justify-center">
                    <div className="w-1/2">
                        <img src="https://via.placeholder.com/300" alt="Your Headshot" className="rounded-md shadow-md" />
                    </div>
                    <div className="w-1/2">
                        <ul className="list-none text-gray-600">
                            <li className="mb-3">
                                <a href="mailto:mbingramm@gmail.com" className="text-violet-900 hover:underline hover:text-pink-400">mbingramm@gmail.com</a>
                            </li>
                            <li className="mb-3">
                                <a href="https://github.com/mbingram" target="_blank" rel="noopener noreferrer" className="text-violet-900 hover:underline hover:text-pink-400">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mbingram/" target="_blank" rel="noopener noreferrer" className="text-violet-900 hover:underline hover:text-pink-400">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;
