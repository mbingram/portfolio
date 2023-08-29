import React from 'react';

function Contact() {
    return (
        <div className="bg-violet-50 p-8 pt-20 h-screen w-screen flex justify-center">
            <div className="max-w-2xl mx-auto flex justify-between items-start">

                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold mb-6 text-violet-950">Get in Touch</h2>
                    <ul className="list-none text-gray-600">
                        <li className="mb-3">
                            📧 <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a>
                        </li>
                        <li className="mb-3">
                            🐱‍💻 <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                        </li>
                        <li>
                            🌐 <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="w-1/2">
                    <img src="https://via.placeholder.com/300" alt="Your Headshot" className="rounded-md shadow-md" />
                </div>

            </div>
        </div>
    );
}

export default Contact;
