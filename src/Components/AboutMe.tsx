import React from 'react';

function AboutMe() {
    return (
        <div className="bg-violet-50 p-8 pt-20 h-screen w-screen flex justify-center">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-violet-950">About Me</h2>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Cras sed feugiat libero. Proin tempor quis purus sed vulputate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <img src="https://via.placeholder.com/150" alt="Placeholder 1" className="rounded-md shadow-md" />
                    <img src="https://via.placeholder.com/150" alt="Placeholder 2" className="rounded-md shadow-md" />
                    <img src="https://via.placeholder.com/150" alt="Placeholder 3" className="rounded-md shadow-md" />
                </div>
                <p className="text-gray-600">
                    Morbi et turpis dapibus, interdum nisi in, lacinia velit. Vivamus pellentesque euismod malesuada. Duis varius mi sit amet quam porttitor dictum. Mauris sit amet justo nec metus facilisis sollicitudin vel id elit.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
