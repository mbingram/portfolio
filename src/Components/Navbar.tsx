import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex flex-col min-h-screen w-1/6 bg-violet-950 py-6 font-medium">
            <ul>
                <Link to="/" ><li className="p-6 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950">Home</li></Link>
                <Link to="/about" ><li className="p-6 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950">About Me</li></Link>
                <Link to="/skills" ><li className="p-6 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950">Skills</li></Link>
                <Link to="/contact" ><li className="p-6 cursor-pointer text-white hover:bg-violet-100 hover:text-violet-950">Contact</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;
