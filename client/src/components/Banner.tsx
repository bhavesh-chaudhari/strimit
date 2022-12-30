import React, {useState} from 'react'
import Link from 'next/link'
import {BsArrowRight} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"
import { Flux } from './svgs'

const Banner = () => {

    const [show, setShow] = useState(true)

    if(!show){
        return <></>
    }
    
  return (
    <div className="bg-white fixed w-full md:relative z-50 border-b border-fuchsia-400 h-[40px] py-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 flex justify-center items-center">
      <Link className="flex px-2 sm:px-6 items-center gap-1 sm:gap-2" href={"/offer"}>
        <span className="font-bold text-center text-xs md:text-[16px] text-gray-700">
          STREAMERS! ONE TIME OFFER! PRE-BOOK NOW!
        </span>
        <span className='scale-75 sm:scale-100' >
          <BsArrowRight></BsArrowRight>
        </span>
      </Link>
      {/* <span
        onClick={() => setShow(false)}
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2"
      >
        <AiFillCloseCircle size={18}></AiFillCloseCircle>
      </span> */}
    </div>
  );
}

export default Banner