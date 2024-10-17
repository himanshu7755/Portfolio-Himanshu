import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import DarkImg from "../assets/DarkBack.jpg"; // Dark mode background image
import WhiteImg from "../assets/Whiteback.jpg"; // Light mode background image

function Navbar({ myStyle, setStyle }) {
    const [isOpen, setIsOpen] = useState(false);
    const [btnText, setBtnText] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleStyle = () => {
        if (myStyle.color === '#fff') {
            setStyle({
                color: '#484646',
                backgroundColor: '#fff',
                backgroundImage: `url(${WhiteImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            });
            setBtnText(false);
        } else {
            setStyle({
                color: '#fff',
                backgroundImage: `url(${DarkImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            });
            setBtnText(true);
        }
    };

    return (
        <div className="sticky top-0 left-0 right-0 z-50 border-b-2 py-2" style={myStyle}>
            <nav className="font-medium flex items-center justify-between px-4 lg:px-10">
                <div className="bg-emerald-300 rounded-full text-white py-5 px-3 md:py-5 md:px-3 flex items-center justify-center">
                    <p>H&M</p>
                </div>
                <div>
                    <button className="focus:outline-none md:hidden lg:hidden" onClick={toggleMenu}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <ul className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center lg:gap-14 text-lg font-sans w-full lg:w-auto transition-all duration-300 ease-in-out`}>
                        <li className="cursor-pointer py-2 px-2 group">
                            <Link to="/" onClick={() => setIsOpen(false)}>Home
                                <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        <li className="cursor-pointer py-2 px-2 group">
                            <Link to="/about" onClick={() => setIsOpen(false)}>About
                                <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        <li className="cursor-pointer py-2 px-2 group">
                            <Link to="/resume" onClick={() => setIsOpen(false)}>Resume
                                <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        <li className="cursor-pointer py-2 px-2 group">
                            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects
                                <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        <li className="cursor-pointer py-2 px-2 group">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact
                                <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        <button onClick={toggleStyle} className="btn cursor-pointer py-2 px-2 group">
                            <span className="text-xl my-5">{btnText ? <FaSun /> : <FaMoon />}</span>
                            <span className="block h-1 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
