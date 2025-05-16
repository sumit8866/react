import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Ll1 from './Ll1.svg'

function Footer() {
  return (
    <>
      <div className="foott container-xxl" style={{ display: 'flex' }}>
                <div className="container-xl" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="foot">
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><i class="fa-regular fa-message"></i></h1>
                        <h3>NEED HELP ?</h3>
                        <p>Our dedicated team are here to help.</p>
                        <h2 style={{ display: 'flex', justifyContent: 'center' }}><Button variant="outline-warning">CHAT NOW</Button></h2>
                    </div>

                    <div className="foot">
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><i class="fa-solid fa-phone-volume"></i></h1>
                        <h3>CALL US</h3>
                        <p style={{ display: 'flex', justifyContent: 'center' }}>Talk to our team 24/7 about your needs.</p>
                        <h4>666 - 880 - 33388</h4>
                    </div>

                    <div className="foot">
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><i class="fa-regular fa-envelope-open"></i></h1>
                        <h3>SUBSCRIBE US</h3>
                        <p style={{ display: 'flex', justifyContent: 'center' }}>And get the scoop on sales & new gear!</p>
                        <Form>
                            <Form.Group className="mpm mb-3 d-flex" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter Email Address" style={{ color: 'ble' }} >
                                </Form.Control>
                                <button style={{ border: 'none', borderRadius: '0 10px 10px 0' }}>Subscribe</button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>

            {/* ================*****************=================== */}

            <div className="footrr container-xxl" >
                <div className="container-xl py-4 d-flex " style={{ flexWrap: 'wrap', justifyContent: 'space-between' }} >
                    <div className="footer">
                        <h4>Information</h4>
                        <p>About us</p>
                        <p>Why choose us</p>
                        <p>Help center</p>
                        <p>Shipping</p>
                        <p>Payment Options</p>
                        <p>Terms & Conditions</p>
                        <p>FAQ</p>
                    </div>
                    <div className="footer">
                        <h4>Purchase & Delivery</h4>
                        <p>Partners</p>
                        <p>Careers</p>
                        <p>Our Blog</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer">
                        <h4>Category</h4>
                        <p>Road Bike</p>
                        <p>e-Bike</p>
                        <p>Frameset</p>
                        <p>Gravel</p>
                        <p>City Bike</p>
                        <p>Triathlon</p>
                    </div>
                    <div className="footer">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>Bike size guide</p>
                        <p>Electric Bike</p>
                        <p>knowledge</p>
                        <p>Bike knowledge</p>
                        <p>Store locator</p>
                    </div>
                    <div className="last">
                        <p style={{ color: '#ffffff6e' }}>Copyright © 2023 <span style={{ color: 'white' }}>Bikys</span>. All rights reserved</p>
                    </div>
                    <div className="last">
                        <p><img src={Ll1} alt="" /></p>
                    </div>
                </div>
                {/* <div style={{ position: 'absolute', top: '0', zIndex: '-1' }}>
                    <img src={Ff1} alt="" style={{ width: '120%' }} />
                </div> */}
            </div>
    </>
  )
}

export default Footer
