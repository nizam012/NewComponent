import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

function Popup() {
    return (
        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content p-2">
                    <div class="header d-flex p-1 justify-content-between align-items-center mb-1">
                        <h5 className='pop-head'>Leading SAFe Certification Training 6.0</h5>
                        <button type="button" class="btn-close " data-bs-dismiss="modal"></button>
                    </div>
                    <div class="body p-1 m-2 ">
                        <p>Leading SAFe certification training is a 2-day course held by SAFe® Program Consultants (SPCs) that teaches the Lean-Agile principles and practices of SAFe. The training gives you comprehensive knowledge in mastering Business Agility to succeed in a competitive market. You will learn how to adopt a customer-centric mindset and design thinking approach to agile product delivery.</p>
                    </div>
                    <div className="d-flex justify-content-center p-4">
                        <a href="/second">
                        <button className='button-content'  >Start your course now <BsArrowRightShort /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
