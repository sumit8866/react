import React, { useState } from 'react'
import Slide from '../src/Slide.png'
import Footer from './Footer';
import Heding from './Heding';
import Im1 from '../src/Im1.webp'
import Im2 from '../src/Im2.jpg'
import Im3 from '../src/Im3.webp'
import Im4 from '../src/Im4.jpg'
import Im5 from '../src/Im5.webp'
import Imp1 from '../src/Imp1.jpg'
import Imp2 from '../src/Imp2.jpg'
import Imp3 from '../src/Imp3.jpg'
import Imp4 from '../src/Imp4.jpg'
import Imp5 from '../src/Imp5.jpg'
import Imp6 from '../src/Imp6.jpg'
import Imm1 from '../src/Imm1.webp'
import Imm2 from '../src/Imm2.webp'
import Imm3 from '../src/Imm3.webp'
import Imm11 from '../src/Imm11.webp'
import Imm12 from '../src/Imm12.webp'
import Imm13 from '../src/Imm13.webp'
import G1 from '../src/G1.jpg'
import G2 from '../src/G2.jpg'
import G3 from '../src/G3.jpg'
import G4 from '../src/G4.jpg'
import G5 from '../src/G5.jpg'
import G6 from '../src/G6.jpg'
import G7 from '../src/G7.webp'
import G8 from '../src/G8.webp'
import G9 from '../src/G9.webp'
import S1 from '../src/S1.jpg'
import S2 from '../src/S2.jpg'
import S3 from '../src/S3.jpg'
import S4 from '../src/S4.jpg'
import S5 from '../src/S5.jpg'
import F1 from '../src/F1.jpg'
import Ff2 from '../src/Ff2.webp'
import Ff1 from '../src/Ff1.jpg'
import Ll1 from '../src/Ll1.svg'

import Slider from 'react-slick';

import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';



function Homes() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="container-xxl p-0">
                <div className="images">
                    <Heding></Heding>
                    <img src={Slide} alt="" style={{ width: '120%' }}></img>
                    <div className="clean">
                        <h4>Clean - Flexible - Customizable</h4>
                        <h1>BIKE &ACCESSORIES </h1>
                        <h1>WOOCOMMERCE THEME</h1>
                    </div>
                </div>
            </div>

            {/* ================*****************=================== */}

            <div className="popular container-xl mb-4">
                <h1 style={{}}>Popular Categories</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-8 col-8 py-3" style={{ margin: 'auto' }}>
                        <div className="row row-gap-3" style={{ position: 'relative' }} >
                            <img src={Im1} alt="" style={{ width: '100%', transition: 'all 0.6s ease' }} />
                            <a href="" style={{ position: 'absolute', bottom: '41%', left: '5%' }}>Mountain Bikes</a>
                            <a href="" style={{ position: 'absolute', bottom: '2%', left: '5%' }}>City Bikes</a>
                            <img src={Im2} alt="" style={{ width: '100%', transition: 'all 0.6s ease' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 col-8 " style={{ margin: 'auto' }}>
                        <div className="row row-gap-3">
                            <div className="col-12" style={{ position: 'relative' }}>
                                <img src={Im3} alt="" style={{ width: '100%' }} />
                                <a href="" style={{ position: 'absolute', bottom: '5%', left: '5%' }}>Classic Bikes</a>

                            </div>
                            <div className="col-6" style={{ position: 'relative' }}>
                                <img src={Im4} alt="" style={{ width: '100%' }} />
                                <a href="" style={{ position: 'absolute', bottom: '4%', left: '10%' }}>Classic Bikes</a>
                            </div>
                            <div className="col-6" style={{ position: 'relative' }}>
                                <img src={Im5} alt="" style={{ width: '100%' }} />
                                <a href="" style={{ position: 'absolute', bottom: '4%', left: '10%' }}>Electric Bikes</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-container" style={{ marginTop: '20px' }}>
                    <Slider {...settings}>
                        <div>
                            <img src={Imp1} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <img src={Imp2} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <img src={Imp3} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <img src={Imp4} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <img src={Imp5} alt="" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <img src={Imp6} alt="" style={{ width: '100%' }} />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* ================*****************=================== */}

            <div className="ourmost container-xl mt-5">
                <h1>Our Most <br /> Advanced Lineup</h1>
                <div className="row my-5">
                    <div className="imgg col-xl-4 col-md-4 col-sm-6">
                        <Card style={{ width: '100%', position: 'relative' }}>
                            <Card.Img className='img1' src={Imm1} />
                            <Card.Img className='img11' src={Imm11} />
                            <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Cali Cruiser</Card.Title>
                                <Card.Text>
                                    <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                    <h5><big>$1999</big>  <small style={{ color: '#00000085' }}><del>$2300</del></small></h5>
                                    <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                                </Card.Text>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="imgg col-xl-4 col-md-4 col-sm-6">
                        <Card style={{ width: '100%' }}>
                            <Card.Img className='img1' src={Imm2} />
                            <Card.Img className='img11' src={Imm12} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>City Surfer</Card.Title>
                                <Card.Text>
                                    <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i>  (1 review)</small>
                                    <h5><big>$2300</big>  <small style={{ color: '#00000085' }}><del>$2800</del></small></h5>
                                    <h6 style={{ color: '#00000085' }}>Electric Urban Bike </h6>
                                </Card.Text>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="imgg col-xl-4   col-sm-6">
                        <Card style={{ width: '100%' }}>
                            <Card.Img className='img1' src={Imm3} />
                            <Card.Img className='img11' src={Imm13} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Lunar Eclipse</Card.Title>
                                <Card.Text>
                                    <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> (1 review)</small>
                                    <h5><big>$2599</big></h5>
                                    <h6 style={{ color: '#00000085' }}>Electric Urban Bike</h6>
                                </Card.Text>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container-xl d-flex py-5" style={{ justifyContent: 'center' }}>
                <Button variant="outline-primary">Shop All Bikes <i class="fa-solid fa-arrow-right"></i></Button>
            </div>

            {/* ================*****************=================== */}

            <div className="onzo container-xxl py-lg-5 py-2" style={{ backgroundColor: 'black' }}>
                <h4 style={{ justifyContent: 'center', display: 'flex', fontFamily: 'webkit-body', color: 'red' }}>PRODUCT GALLERY</h4>
                <h1>ONZO IN ACTION</h1>


                <div className="container-xl" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", }}>
                    <div className="gallery_style">
                        <img src={G1} alt="Dish 1" className="img-container" />
                    </div>
                    <div className="gallery_style" >
                        <img src={G2} alt="Dish 2" className="img-container" />
                    </div>
                    <div className="gallery_style" >
                        <img src={G3} alt="Dish 3" className="img-container" />
                    </div>
                    <div className="gallery_style" >
                        <img src={G4} alt="Dish 4" className="img-container" />
                    </div>
                    <div className="gallery_style" >
                        <img src={G5} alt="Dish 5" className="img-container" />
                    </div>
                    <div className="gallery_style" >
                        <img src={G6} alt="Dish 6" className="img-container" />
                    </div>



                    <div className="ga gallery_style " style={{ display: 'none' }}>
                        <img src={G7} alt="Dish 3" className="img-container" />
                    </div>
                    <div className="ga gallery_style " style={{ display: 'none' }}>
                        <img src={G8} alt="Dish 4" className="img-container" />
                    </div>
                    <div className="ga gallery_style " style={{ display: 'none' }}>
                        <img src={G9} alt="Dish 5" className="img-container" />
                    </div>
                    <button className='showmo fs-2 py-0 px-3' id='showmore' onClick={() => {
                        const gaa = document.querySelectorAll(".ga")
                        gaa.forEach(imgs => {
                            imgs.style.display = 'block'
                        })
                        document.getElementById('showless').style.display = 'block'
                        document.getElementById('showmore').style.display = 'none'
                    }}><i class="fa-solid fa-caret-down"></i></button>

                    <button className='showmo fs-2 py-0 px-3' id='showless' style={{ display: 'none' }} onClick={() => {
                        const gaa = document.querySelectorAll(".ga")
                        gaa.forEach(imgs => {
                            imgs.style.display = 'none'
                        })
                        document.getElementById('showmore').style.display = 'block'
                        document.getElementById('showless').style.display = 'none'

                    }}> <i class="fa-solid fa-caret-up"></i></button>
                </div>
            </div>

            {/* ================*****************=================== */}

            <div className="ffea container-xxl" style={{ overflow: 'hidden', padding: '0px', position: 'relative' }}>
                <div className="feat container-xl">
                    <h1>FEATURES</h1>
                </div>
                {/* <img src={F1} alt="" style={{ width: '112%' }} /> */}
                {/* <div className="container-xxl" style={{ position: 'absolute', top: '15%' }}> */}
                <div className="container-xl" style={{ display: 'flex', zIndex: '5' }} >
                    <div className="fea">
                        <div className="sec-fea">
                            <i class="fa-regular fa-sun"></i>
                        </div>
                        <div className="sub-fea">
                            <h3>All Weather Conditions</h3>
                            <p>Engineered for all weather conditions, our bike guarantees reliable performance, whether you're riding through rain, snow, or the summer heat</p>
                        </div>
                        <div className="sec-fea">
                            <i class="fa-solid fa-battery-half"></i>
                        </div>
                        <div className="sub-fea">
                            <h3>Supercharged Battery</h3>
                            <p>Equipped with a Supercharged Battery, our bike offers unmatched range and rapid charging, ensuring you stay powered up for longer, no matter the journey</p>
                        </div>
                        <div className="sec-fea ll">
                            <i class="fa-solid fa-gears"></i>
                        </div>
                        <div className="sub-fea ll">
                            <h3>Nexxt-Gen CrankShaft</h3>
                            <p>Our Nexxt-Gen CrankShaft delivers enhanced pedaling efficiency and power transfer, giving riders a smoother, more responsive cycling experience</p>
                        </div>


                    </div>
                    <div className="fea">
                        <div className="sec-fea">
                            <i class="fa-solid fa-wifi"></i>
                        </div>
                        <div className="sub-fea">
                            <h3>GPS Tracking / Anti-Theft</h3>
                            <p>We embrace sustainable practices in every bike we build—using recyclable materials, reducing emissions in production, and designing for long-lasting, eco-friendly performance</p>
                        </div>
                        <div className="sec-fea">
                            <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className="sub-fea">
                            <h3>Sustainable Practices</h3>
                            <p>Our bicycles are built with sustainability in mind, using recycled materials, eco-friendly coatings, and energy-efficient manufacturing to promote a cleaner, greener ride</p>
                        </div>
                        <div className="sec-fea ll">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </div>
                        <div className="sub-fea ll">
                            <h3>Sustainable Practices</h3>
                            <p>Experience unparalleled support with every ride, backed by expert service and innovative design</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}

            </div>

            {/* ================*****************=================== */}
            <div className="serr container-xl">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="container-xl" style={{ padding: '10px 10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div className="services">
                    <img src={S1} alt="" style={{ width: '100%' }} />
                    <p style={{ padding: '8px 0' }}><i style={{ color: '#ff8600' }} class="fa-solid fa-stop"></i> December 16, 2021 / By admin</p>
                    <h2 className='ser' style={{ fontFamily: 'auto', fontWeight: '700' }}>Introducing: Titan Racing Partners with Weekend</h2>
                    <p style={{ padding: '10px 0', fontFamily: 'math', fontSize: '21px' }}>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum  eget...</p>
                </div>
                <div className="services" style={{ display: 'flex', flexWrap: 'wrap' }}>

                    <div className="sec-ser">
                        <p style={{ padding: '5px 0' }}><i style={{ color: '#ff8600' }} class="fa-solid fa-stop"></i>  December 19, 2021 / By admin</p>
                        <h5 className='ser'>Bicycling Magazine – Drone Comp ...</h5>
                    </div>
                    <div className="sub-ser">
                        <img src={S2} alt="" style={{ width: '100%' }} />
                    </div>

                    <div className="sec-ser">
                        <p style={{ padding: '5px 0' }}><i style={{ color: '#ff8600' }} class="fa-solid fa-stop"></i>   December 17, 2021 / By admin</p>
                        <h5 className='ser'>Introducing: The All-New Trance ...</h5>
                    </div>
                    <div className="sub-ser">
                        <img src={S3} alt="" style={{ width: '100%' }} />
                    </div>

                    <div className="sec-ser">
                        <p style={{ padding: '5px 0' }}><i style={{ color: '#ff8600' }} class="fa-solid fa-stop"></i>    December 22, 2021 / By admin</p>
                        <h5 className='ser'>Racer blog: Tiffany Keep – In the ...</h5>
                    </div>
                    <div className="sub-ser">
                        <img src={S4} alt="" style={{ width: '100%' }} />
                    </div>

                    <div className="sec-ser">
                        <p style={{ padding: '5px 0' }}><i style={{ color: '#ff8600' }} class="fa-solid fa-stop"></i>   December 20, 2021 / By admin</p>
                        <h5 className='ser'>Tiffany Keep has been in the thick ...</h5>
                    </div>
                    <div className="sub-ser">
                        <img src={S5} alt="" style={{ width: '100%' }} />
                    </div>

                </div>
            </div>
                    <Footer></Footer>
            {/* ================*****************=================== */}

            {/* <div className="foott container-xxl" style={{ display: 'flex' }}>
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
            </div> */}

            {/* ================*****************=================== */}

            {/* <div className="footrr container-xxl" >
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
            </div> */}
        </>
    )
}

export default Homes
