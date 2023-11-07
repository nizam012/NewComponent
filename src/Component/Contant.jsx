import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Fb from '../Images/image3.png'
import Google from '../Images/image4.png'
import Tr from '../Images/image5.png'


function Contant() {
    return (
        <div className="content-box  ">
            <div className="c-header">
                <h4>Leading SAFe Certification Training 6.0</h4>
            </div>
            <div className="c-para">
                <p>Leading SAFe certification training is a 2-day course held by SAFe® Program Consultants (SPCs) that teaches the Lean-Agile principles and practices of SAFe. The training gives you comprehensive knowledge in mastering Business Agility to succeed in a competitive market. You will learn how to adopt a customer-centric mindset and design thinking approach to agile product delivery.</p>
            </div>
            <div className="d-flex justify-content-center ">
                <button className='button-content' data-bs-toggle="modal" data-bs-target="#exampleModal" >Start your course now <BsArrowRightShort /></button>
            </div>
            <div className="c-box d-flex justify-content-center p-4 my-5 ">
                <div className="fb d-flex align-items-center mx-5">
                    <img className='img-c' src={Fb} alt="" /><p className='para m-0' >4.9/5</p>
                </div>
                <div className="gog d-flex align-items-center mx-3">
                    <img className='img-c ' src={Google} alt="" /><p className='para m-0' >4.9/5</p>

                </div>
                <div className="tr d-flex align-items-center mx-3">
                    <img className='img-c' src={Tr} alt="" /><p className='para m-0' >4.9/5</p>

                </div>
            </div>
        </div>
    )
}

export default Contant
