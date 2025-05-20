import { FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";
import Logo from "../../../public/logo.png";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="w-full p-6 bg-black">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10   text-center md:justify-between">
                <div className="w-2/5 flex  items-center  md:mr-4 lg:ml-20 ">
                    <img className="w-24 h-24" src={Logo} alt="" />

                </div>

                <ul className="w-3/5 flex flex-col lg:flex-row  items-start gap-y-2 gap-x-20 ">
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            About Us
                        </a>
                        <div className="flex flex-col text-start mt-4 text-sm">
                            <h1>Master Plan</h1>
                            <h1>Jobs</h1>
                            <h1>Invest</h1>
                            <h1>Pressroom</h1>
                            <h1>Invest</h1>
                            <h1>Blog</h1>
                            <h1>Contact</h1>
                        </div>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="mr-8 block font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Explore EEVE
                        </a>
                        <div className="flex flex-col items-start mt-4 text-sm">
                            <h1>Unlock my Robot Power</h1>
                            <h1>Starlight</h1>
                            <h1>Robot Platform</h1>
                            <h1>EEVE Roadmap</h1>
                        </div>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Community & Support
                        </a>
                        <div className="flex flex-col items-start mt-4 text-sm">
                            <h1>Willow X Community</h1>
                            <h1>Developer & Maker Access</h1>
                            <h1>Special Cases</h1>
                        </div>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-sky-400 lg:mx-24 lg:hidden" />


            <hr className="my-4 border-w " />
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
                <div className="grid grid-flow-col gap-6 text-white m-4 justify-center " target="blank">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" ><FaFacebook className="md:w-5 md:h-5 "></FaFacebook></a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><FaInstagram className="md:w-5 md:h-5" ></FaInstagram></a>
                    <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank"><FaTwitter className="md:w-5 md:h-5" ></FaTwitter></a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank"><FaLinkedin className="md:w-5 md:h-5" ></FaLinkedin></a>
                </div>
                <div className="flex  items-center gap-4">
                    <h1>March 22 Recap</h1>
                    <h1>Privacy Policy</h1>
                    <h1>General Terms</h1>
                    <h1>Contact</h1>
                </div>
                <div className="flex  items-center gap-2">
                    <img src="./Flag.png" alt="" />
                    <h1>
                    United States (English)</h1>
                </div>
            </div>
            <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">EEVE
                © 2025, All rights reserved
            </p>

        </footer >

    );
};

export default Footer;