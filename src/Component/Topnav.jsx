import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'

function Topnav() {
    return (
        <div>
            <div className="header-container d-flex justify-content-center  ">
               
                <a className="phone" href="#"> < BsTelephoneFill className='icon mx-3   ' />+1 (202) 996-3343 </a><span>|</span><a className="phone" href="#"> +44 7441 443874 </a><span>|</span><a className="phone" href=""> +91 76039 55514</a>
            </div>
        </div>
    )
}

export default Topnav
