
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/icon.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {



    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/categories">Categories</NavLink>
            </li>

            <li>
                <NavLink to="/custom">Custom</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>

        </>

    );
    return (
        <div className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none  bg-opacity-40 px-4  backdrop-blur-xl backdrop-saturate-100 md:px-8 ">
            <div className="navbar p-1 ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost  hover:bg-cyan-900 hover:text-white   lg:hidden">
                            <AiOutlineMenu className="w-3 h-4"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-900 text-white rounded w-32">
                            {navLinks}
                        </ul>
                    </div>
                    <div className=" hidden lg:flex ">
                        <Link to="/" className="flex mr-4   items-center normal-case  font-serif font-extrabold text-4xl lg:text-4xl ">
                            <img className="w-8 h-8 md:w-10 md:h-10  mx-auto" src={Logo} alt="" />
                            <h1 className="text-2xl md:text-3xl mx-2 text-black">Furni<span className="text-2xl md:text-3xl text-[#1E99F5]">Flex</span></h1>
                        </Link>


                    </div>

                </div>
                <div className="navbar-center ">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-6 text-cyan-900">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex md:hidden  ">
                        <Link to="/" className="flex mr-4   items-center normal-case  font-serif font-extrabold text-4xl lg:text-4xl ">
                            <img className="w-8 h-8 md:w-10 md:h-10  mx-auto" src={Logo} alt="" />
                            <h1 className="text-2xl md:text-3xl mx-2 text-black">Furni<span className="text-2xl md:text-3xl text-[#1E99F5]">Flex</span></h1>
                        </Link>


                    </div>
                </div>

                <div className="navbar-end">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div>
                          
                                <Link to="/cart">
                                    <FaCartArrowDown className="w-6 h-6 ml-3 text-gray-700"></FaCartArrowDown>
                                </Link>
                           
                        </div>
                     

                            <div className="dropdown dropdown-end ml-1">
                                <label tabIndex={0} className=" bg-cyan-900">
                                   
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded w-32  bg-sky-800 bg-opacity-80 text-white">
                                    <li>
                                        <a className="justify-between hover:bg-cyan-900 hover:text-white  focus:text-white " href="/profile">
                                            Sparrow Forge
                                        </a>
                                    </li>

                                    <li ><a  className="hover:bg-cyan-900 hover:text-white  focus:text-white" >Logout</a></li>
                                </ul>
                            </div>
                        


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;