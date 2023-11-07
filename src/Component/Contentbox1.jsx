import React from 'react'
import Img1 from '../Images/image1.png'
import { useState } from 'react'
import Fb from '../Images/image3.png'
import Google from '../Images/image4.png'
import Tr from '../Images/image5.png'

function Contentbox1() {
    const [toggle, setToggle] = useState(false)

    const benifits = () => {
        setToggle(false)
        // setSelect()
    }

    const orginization = () => {
        setToggle(true)
    }
    return (
        <div className="container">

            <div className="contaner d-flex ">

                <div className="content-box1  ">
                    <div className="c-header1">
                        <h4>Leading SAFe Certification Training 6.0</h4>
                    </div>
                    <div className="c-para1">
                        <p>Leading SAFe certification training is a 2-day course held by SAFe® Program Consultants (SPCs) that teaches the Lean-Agile principles and practices of SAFe. The training gives you comprehensive knowledge in mastering Business Agility to succeed in a competitive market. You will learn how to adopt a customer-centric mindset and design thinking approach to agile product delivery.</p>
                    </div>
                    <div className="d-flex  ">
                        <button className={`button-content1  m-2 ${!toggle ? 'active' : ''}`} onClick={e => benifits(e)} >Explore The upcoming Batches! </button>
                        <button className={`button-content1 m-2 ${toggle ? 'active' : ''}`} onClick={e => orginization(e)} >Corporate Enquiry  </button>
                    </div>
                </div>
                <div className="image1">
                    <img src={Img1} alt="" />
                </div>
            </div>
            <div className="c-box1 d-flex justify-content-center p-4 my-5 ">
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

export default Contentbox1
