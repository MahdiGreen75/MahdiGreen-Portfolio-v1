import { NavLink } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./nav-btn-animation.css";
import { useState } from "react";

const NavInterface = () => {
    const [hamburger, setHamburger] = useState(true);

    const navLink = <>
        <li className="flip-horizontal-bottom duration-500 text-xs sm:text-base md:text-xl mb-2 sm:mb-0">
            <NavLink to={"/"}>Home</NavLink>
        </li>
        <div className="border-l-2 h-[10px] hidden sm:block"></div>
        <li className="flip-horizontal-bottom duration-500 text-xs sm:text-base md:text-xl mb-2 sm:mb-0">
            <NavLink to={"/skills"}>Skills</NavLink>
        </li>
        <div className="border-l-2 h-[10px] hidden sm:block"></div>
        <li className="flip-horizontal-bottom duration-500 text-xs sm:text-base md:text-xl mb-2 sm:mb-0">
            <NavLink to={`/contacts`}>Contact Me</NavLink>
        </li>
        <div className="border-l-2 h-[10px] hidden sm:block"></div>
        <li className="flip-horizontal-bottom duration-500 text-xs sm:text-base md:text-xl mb-2 sm:mb-0">
            <NavLink to={"/about"}>About</NavLink>
        </li>
    </>
    console.log(hamburger)
    return (
        <div className="flex justify-between items-center my-5">
            <div className="p-2 border-4 border-gray-500 rounded-md">
                <span className="font-extrabold text-white tracking-widest">MahdiMan
                    <span className="text-orange-600 text-2xl">.</span>
                </span>
            </div>
            <div>
                <ol className="hidden sm:flex justify-center items-center gap-5 uppercase font-bold">
                    {navLink}
                </ol>
            </div>
            <div >
                <ol className="hidden sm:flex sm:gap-2">
                    <li>
                        <NavLink to={`https://www.linkedin.com/in/md-mahdi-hasan-67a922278/`}>
                            <CiLinkedin className="text-3xl hover:text-white active:text-white" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`https://www.facebook.com/profile.php?id=100025372359493`}>
                            <CiFacebook className="text-3xl hover:text-white active:text-white" />
                        </NavLink>
                    </li>
                </ol>
            </div>
            {
                <div className="sm:hidden text-4xl relative" >
                    {
                        hamburger ?
                            <>
                                <span onClick={() => setHamburger(!hamburger)}><GiHamburgerMenu /></span>
                            </>
                            :
                            <>
                                <span onClick={() => setHamburger(!hamburger)}><GrClose /></span>
                            </>
                    }
                    {
                        !hamburger &&
                            <>
                                <div className="mt-2 absolute bg-red top-8 right-1 p-5 border-2 rounded-md bg-gradient-to-b from-cyan-700 to-blue-700 font-extrabold">
                                    <ol>
                                        {navLink}
                                    </ol>
                                    <div className="border my-4"></div>
                                    <div >
                                        <ol className="flex gap-2 justify-between">
                                            <li>
                                                <NavLink>
                                                    <CiLinkedin className="text-3xl hover:text-white active:text-white" />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink>
                                                    <CiFacebook className="text-3xl hover:text-white active:text-white" />
                                                </NavLink>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            }
        </div>
    );
};

export default NavInterface;
