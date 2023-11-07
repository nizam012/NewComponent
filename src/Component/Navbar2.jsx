import React from 'react'

function Navbar2() {
  return (
    <div className="nav-bar1 justify-content-between align-items-center ">
      {/* <header> */}
      <nav className='nav-bar1 d-flex  '>
        <ul className="ul-nav1 d-flex  ">
        <div className="middle  p-3 d-flex ">
            <li ><a className='li1' href="#">Home</a></li>
            <li ><a className='li1' href="#">About</a></li>
            <li  ><a className='li1' href="#">Courses</a></li>
            <li  ><a className='li1' href="#">Pages</a></li>
            <li  ><a className='li1' href="#">Blog</a></li>
            <li  ><a className='li1' href="#">Contact</a></li>
            </div>
        </ul>
        {/* <div className="last p-3">
              <ul className="ul-nav d-flex justify-content-around" >
                <li className='search'><input className='search1 p-2' type="text" placeholder="Search" /><BiSearchAlt2 className='sc-icon' fill='rgba(32, 78, 207, 1)' /></li>
                <button className='button'> <BiSolidShoppingBag fill='black' /></button>
                <button className='button'><IoMdContact fill='black' /></button>
                <button className='button'><AiOutlineMenu fill='black' /></button>
              </ul>
            </div> */}
      </nav>
      {/* </header> */}
    </div>
  )
}

export default Navbar2
