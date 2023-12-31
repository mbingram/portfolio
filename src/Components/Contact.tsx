import shapes from '../Images/abstract-shape.png'

function Contact() {
    return (
        <div className="bg-gradient-to-r from-violet-950 to-violet-50 p-8 sm:p-4 pt-10 sm:pt-5 w-screen flex flex-row justify-center overflow-hidden">
            <div className="w-5/6 ml-0 max-w-7xl py-5 px-10 sm:px-3 h-auto mx-auto bg-violet-50 drop-shadow-lg rounded-md border border-pink-400">
                <div className="relative bg-violet-950 py-8 pl-20 -ml-60 sm:-ml-20 mb-10 sm:mb-5 border-r border-y border-pink-400 rounded-r-md">
                    <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-violet-50 absolute -mt-3 ml-40 sm:ml-5">Let's Get in Touch!</h2>
                </div>
                <div className="w-full max-w-6xl mx-auto my-auto lg:px-3 text-lg md:text-base sm:text-sm">
                    <div className="mb-10 max-w-2xl">
                        Got a project in mind, or simply want to chat about tech? I'm all ears.
                        <br /> <br />
                        Whether it's a collaborative opportunity or you just want to share some industry insights,
                        I'm just an email, LinkedIn message, or GitHub pull request away. Together, we can make technology not just better, but extraordinary.
                        <br /> <br />
                        <p className="font-semibold text-violet-950">Let's start the conversation!</p>
                    </div>
                    <div className="flex flex-row justify-evenly w-full">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col justify-center ml-auto mr-20 sm:mr-5">
                                <button className="mb-3 px-6 py-2 bg-white border border-pink-400 rounded-md font-semibold text-center text-violet-950 hover:text-white hover:bg-violet-950"
                                    onClick={() => window.open("mailto:mbingramm@gmail.com", "_blank")} >
                                    mbingramm@gmail.com
                                </button>
                                <button className="mb-3 px-6 py-2 bg-white border border-pink-400 rounded-md font-semibold text-center text-violet-950 hover:text-white hover:bg-violet-950"
                                    onClick={() => window.open("https://www.linkedin.com/in/mbingram/", "_blank")} >
                                    LinkedIn
                                </button>
                                <button className="mb-3 px-6 py-2 bg-white border border-pink-400 rounded-md font-semibold text-center text-violet-950 hover:text-white hover:bg-violet-950"
                                    onClick={() => window.open("https://github.com/mbingram", "_blank")} >
                                    GitHub
                                </button>
                            </div>
                            <div className="w-1/2">
                                <img src={shapes} alt="shapes" className="w-3/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
