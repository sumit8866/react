import React from 'react'
import Lg1 from './Lg1.webp'
import Heding from './Heding'
import Footer from './Footer'
import { Button, Card } from 'react-bootstrap'
import Imm1 from './Imm1.webp'
import Imm11 from './Imm11.webp'
import Imm2 from './Imm2.webp'
import Imm12 from './Imm12.webp'
import Imm3 from './Imm3.webp'
import Imm13 from './Imm13.webp'
import Imm4 from './Imm4.webp'
import Imm14 from './Imm14.webp'
import Imm15 from './Imm15.webp'
import Imm5 from './Imm5.webp'
import Imm6 from './Imm6.webp'
import Imm16 from './Imm16.webp'
import H1 from './H1.webp'
import H2 from './H2.webp'
import H3 from './H3.webp'


function Shop() {
    return (
        <>
            <Heding></Heding>
            <div className="sshop container-xxl py-0">
                <div className="hh" style={{ height: '250px' }}></div>
                <div className="shops container-xl">
                    <h1>Shop</h1>
                    <h3>Performance built to handle any terrain and riding style</h3>
                </div>
                <div className="hh" style={{ height: '250px' }}></div>
            </div>


            <div className="container-xl d-flex" style={{flexWrap:'wrap'}}>
                    <div className="row my-5 row-gap-4">
                        <div className="imgee col-xl-4 col-md-4 col-6 ">
                            <Card style={{ width: '100%', position: 'relative' }}>
                                <Card.Img className='img2' src={Imm1} />
                                <Card.Img className='img12' src={Imm11} />
                                <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Cali Cruiser</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                        <h5><big>$1999</big>  <small style={{ color: '#00000085' }}><del>$2300</del></small></h5>
                                        <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                               
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%',position:'relative' }}>
                                <Card.Img className='img2' src={Imm2} />
                                <Card.Img className='img12' src={Imm12} />
                                <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>

                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>City Surfer</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i>  (1 review)</small>
                                        <h5><big>$2300</big>  <small style={{ color: '#00000085' }}><del>$2800</del></small></h5>
                                        <h6 style={{ color: '#00000085' }}>Electric Urban Bike </h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                                
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img className='img2' src={Imm3} />
                                <Card.Img className='img12' src={Imm13} />
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Lunar Eclipse</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> (1 review)</small>
                                        <h5><big>$2599</big></h5>
                                        <h6 style={{ color: '#00000085' }}>Electric Urban Bike</h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                                
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img className='img2' src={Imm4} />
                                <Card.Img className='img12' src={Imm14} />
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Mark IV</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                        <h5><big>$2500</big></h5>
                                        <h6 style={{ color: '#00000085' }}>Cruiser Bike</h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                               
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img className='img2' src={Imm5} />
                                <Card.Img className='img12' src={Imm15} />
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Road Streak</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i>  (1 review)</small>
                                        <h5><big>$2699</big></h5>
                                        <h6 style={{ color: '#00000085' }}>Electric Urban Bike </h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                              
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img className='img2' src={Imm6} />
                                <Card.Img className='img12' src={Imm16} />
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Santa Monica</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> (5 review)</small>
                                        <h5><big>$2249</big></h5>
                                        <h6 style={{ color: '#00000085' }}>Electric Urban Bike</h6>
                                    </Card.Text>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 2px', margin: '2px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button>
                                    <button className='select'>Select Options</button>
                                
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%', position: 'relative' }}>
                                <Card.Img className='img3' src={H1} />
                                {/* <Card.Img className='img12' src={Imi11} /> */}
                                <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Shuma Helmet</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#00000085' }} class="fa-regular fa-star"></i> (1 review)</small>
                                        <h5><big>$60</big>  <small style={{ color: '#00000085' }}><del>$67</del></small></h5>
                                        <h6 style={{ color: '#00000085' }}>Biking Accessory</h6>
                                    </Card.Text>
                                    {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                                    <button className='select'>Select Options</button>
                                
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%',position:'relative' }}>
                                <Card.Img className='img3' src={H2} />
                                <h6 style={{ backgroundColor: 'yellow', width: 'max-content', padding: '5px', position: 'absolute', top: '5px', left: '5px' }}><small> SELE !</small></h6>

                                {/* <Card.Img className='img12' src={Imi12} /> */}
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Max Grip Tire</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i>  (1 review)</small>
                                        <h5><big>$68</big>  <small style={{ color: '#00000085' }}><del>$75</del></small></h5>
                                        <h6 style={{ color: '#00000085' }}>Cycling Accessory </h6>
                                    </Card.Text>
                                    {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button>
                                    <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                                    <button className='select'>Select Options</button>
                               
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="imgee col-xl-4 col-md-4 col-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img className='img3' src={H3} />
                                {/* <Card.Img className='img12' src={Imi13} /> */}
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'monospace', color: 'red', fontWeight: 'bold', fontSize: '24px' }}>Racing Saddle</Card.Title>
                                    <Card.Text>
                                        <small><i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> <i style={{ color: '#ffbf00' }} class="fa-solid fa-star"></i> (1 review)</small>
                                        <h5><big>$59</big></h5>
                                        <h6 style={{ color: '#00000085' }}>Cycling Accessory</h6>
                                    </Card.Text>
                                    {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-gauge-high"></i> 32 MPH</small></h6></Button> */}
                                    {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-battery-half"></i> 45 Mi</small></h6></Button> */}
                                    {/* <Button style={{ padding: '5px 5px 0px 5px', margin: '5px', border: '1px solid', backgroundColor: 'white', color: 'black' }}><h6><small><i class="fa-solid fa-bolt"></i> 48V/18AH</small></h6></Button> */}
                                    {/* <Button variant="primary" size="lg">
                                        Block level 
                                    </Button> */}
                                    <button className='select'>Select Options</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Shop
