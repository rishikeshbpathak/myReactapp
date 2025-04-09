import React from "react";
import { FaFacebook, FaTwitter, FaCheck } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-center sm:text-left bg-dark text-white p-4 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h4 className="text-white font-bold mb-3">Company</h4>
                    <ul className="list-none space-y-3">
                        <li><a className="text-gray-400 transition" href="#">About Us</a></li>
                        <li><a className="text-gray-400 transition" href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="hidden sm:block">
                    <h4 className="text-white font-bold mb-3">View Website in</h4>
                    <p className="text-gray-400 flex items-center">
                        <FaCheck size={20} className="mr-2" /> English
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-3">Need Help?</h4>
                    <ul className="list-none space-y-3">
                        <li><a className="text-gray-400 transition" href="#">Visit Help Center</a></li>
                        <li><a className="text-gray-400 transition" href="#">Share Feedback</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-3 text-center">Connect With Us</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20} className="text-white hover:text-blue-500 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20} className="text-white hover:text-blue-400 transition" />
                        </a>
                    </div>
                    <div className="flex justify-center mt-4 space-x-4">
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="Google Play Store" className="w-20 sm:w-24" />
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="iOS App Store" className="w-20 sm:w-24" />
                    </div>
                </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm pb-2">
                        © 2025 STAR. All rights reserved. <br />
                        <a className="text-gray-400 transition" href="#">Terms of Use</a> <span className="mx-2">|</span> 
                        <a className="text-gray-400 transition" href="#">Privacy Policy</a> <span className="mx-2">|</span> 
                        <a className="text-gray-400 transition" href="#">FAQ</a>
                    </p>
        </footer>
    );
}
