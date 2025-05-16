import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Heding() {
  return (
    <>
      <div className="container-xxl" style={{ position: 'absolute' }}>
        <div className="heder container-xl">
          <div className="sub-heder row" style={{ color: 'white' }}>
            <div className="col-md-1 col-sm-11 col-10">
              <h1>Bikes</h1>
            </div>
            <div className="header1 col-lg-7 col-md-10  d-none d-md-block " >
              <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>PAGES</li>
                <li>BLOG</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <DropdownButton id="dropdown-Light-button" className='col-1  d-md-none d-sm-block' title="">
              <Dropdown.Item href="#/action-1">HOME</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SHOP</Dropdown.Item>
              <Dropdown.Item href="#/action-3">PAGES</Dropdown.Item>
              <Dropdown.Item href="#/action-3">BLOG</Dropdown.Item>
              <Dropdown.Item href="#/action-3">ABOUT US</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CONTACT</Dropdown.Item>
            </DropdownButton>
            <div className="sec-heder col-4">
              <input type="text" placeholder='SEARCH' />
              <i class="fa-solid fa-user" style={{ fontSize: '20px', marginLeft: '10px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-regular fa-heart" style={{ fontSize: '20px', marginLeft: '10px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-solid fa-cart-shopping" style={{ fontSize: '20px', marginLeft: '10px', alignItems: 'center', display: 'flex' }}></i>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Heding
