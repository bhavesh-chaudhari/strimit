import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const Socials = () => {

    return (
        <div className="space-x-10 bg-theme-black bg-fuchsia-50 h-10 flex items-center justify-center text-center">
            <a href = "https://www.instagram.com/_strimit/" target="_blank"><p><BsInstagram className="w-5 h-5"></BsInstagram></p></a>
            <a href = "https://www.facebook.com/people/_strimit/100089197329228/?mibextid=ZbWKwL" target="_blank"><p><BsFacebook className="w-5 h-5"></BsFacebook></p></a>
            <a href = "https://twitter.com/_strimit?t=bY4bUx8qmG06uFYyu-yIlw&s=08" target="_blank"><p><BsTwitter className="w-5 h-5"></BsTwitter></p></a>
        </div>
    );
}

export default Socials;