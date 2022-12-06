import React, {useState} from 'react'
import Link from 'next/link'
import {BsArrowRight} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"

const Banner = () => {

    const [show, setShow] = useState(true)

    if(!show){
        return <></>
    }
    
  return (
    <div className="bg-gradient-to-r relative from-blue-600 to-pink-600 flex justify-center items-center">
      <Link className='flex px-6 items-center gap-2' href={"/offer"}>
        <span className='font-bold'>Get limited time offer</span>
        <span>
          <BsArrowRight></BsArrowRight>
        </span>
      </Link>
      <span onClick={()=>setShow(false)} className='absolute right-4 top-1/2 cursor-pointer -translate-y-1/2'>
        <AiFillCloseCircle size={18}></AiFillCloseCircle>
      </span>
    </div>
  );
}

export default Banner