import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BiSolidShoppingBag } from 'react-icons/bi'
import { IoMdContact } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'

function Nav() {
    return (
        <div className="nav-bar  ">
            <header>
                <nav className='nav-bar d-flex justify-content-between align-items-center'>
                    <p className='logo1 m-3' >logo</p>
                    <div className="middle  p-3">
                        <ul className="ul-nav d-flex  ">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="last p-3">
                        <ul className="ul-nav d-flex justify-content-around" >
                            <li className='search'><input className='search1 p-2' type="text" placeholder="Search" /><BiSearchAlt2 className='sc-icon' fill='rgba(32, 78, 207, 1)' /></li>
                            <button className='button'> <BiSolidShoppingBag fill='black' /></button>
                            <button className='button'><IoMdContact fill='black' /></button>
                            <button className='button'><AiOutlineMenu fill='black' /></button>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav
