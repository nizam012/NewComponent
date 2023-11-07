import React from 'react'
import { PiStudentDuotone } from 'react-icons/pi'
import { AiOutlineUnlock } from 'react-icons/ai'
import { TbMoneybag } from 'react-icons/tb'
import { LiaHeadsetSolid } from 'react-icons/lia'


function Footer() {
    return (
        <div className="footer d-flex justify-content-around ">
            <p><PiStudentDuotone  size={30}  className='f-icon'/>20k+ Online Courses</p>
            <p><AiOutlineUnlock size={30}  className='f-icon'/>Lifetime Access</p>
            <p><TbMoneybag  size={30} className='f-icon'/>Value For Money</p>
            <p><LiaHeadsetSolid size={30}  className='f-icon'/>Lifetime Support</p>
        </div>
    )
}

export default Footer
