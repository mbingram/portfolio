import { Link } from 'react-router-dom';
import home from '../Images/living-room.png'
import about from '../Images/woman.png'
import skill from '../Images/skill.png'
import contact from '../Images/phone-call.png'

function Navbar() {
    return (
        <div className="flex flex-col min-h-screen w-1/6 bg-violet-950 py-6 font-medium">
            <ul>
                <Link to="/" >
                    <div className="flex flex-row items-center px-4 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950 border border-violet-950 hover:border-pink-400" >
                        <img className="h-8" src={home} alt='home' />
                        <li className="p-6">
                            Home
                        </li>
                    </div>
                </Link>
                <Link to="/about" >
                    <div className="flex flex-row items-center px-4 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950 border border-violet-950 hover:border-pink-400" >
                        <img className="h-8" src={about} alt='home' />
                        <li className="p-6">
                            About
                        </li>
                    </div>
                </Link>
                <Link to="/skills" >
                    <div className="flex flex-row items-center px-4 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950 border border-violet-950 hover:border-pink-400" >
                        <img className="h-8" src={skill} alt='home' />
                        <li className="p-6">
                            Skills
                        </li>
                    </div>
                </Link>
                <Link to="/contact" >
                    <div className="flex flex-row items-center px-4 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950 border border-violet-950 hover:border-pink-400" >
                        <img className="h-8" src={contact} alt='home' />
                        <li className="p-6">
                            Contact
                        </li>
                    </div>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
