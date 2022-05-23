import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav,  Navbar, Row, Col,  NavbarBrand } from 'react-bootstrap';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css";

library.add(faLinkedinIn, faGithub, faEnvelope, faShopify);

function InfoBar(){
        
          return(
                    <>
                              <Navbar  className="head-navbar" collapseOnSelect expand='lg' fixed='top'> 
                                        <NavbarBrand className='name' > 
                                                  <Nav.Link 
                                                            to='#'
                                                            href='https://www.shopify.com/'
                                                            target="_blank"
                                                  >
                                                            <span className='link name pt-1'>
                                                                      <FontAwesomeIcon className='link link-icon' icon={['fab','shopify']}/>
                                                                      Shopify Challenge
                                                            </span> 
                                                  </Nav.Link>
                                        </NavbarBrand>
                                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />          
                                        <Navbar.Collapse id='responsive-navbar-nav' >
                                                  <Container className='row-container text-center'>
                                                            <Row>
                                                                      <Col sm={0} lg={2} md={0} xl={1}/>
                                                                      <Col sm={12} lg={6} md={12} xl={8} className='center-col pt-1' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <Nav >
                                                                                         
                                                                                          <Nav.Item  >
                                                                                                    <div/>
                                                                                                    <Nav.Link 
                                                                                                              eventKey="1"
                                                                                                              to="/"
                                                                                                              as={Link}

                                                                                                    >  
                                                                                                              <div className="link link-text">
                                                                                                                       Home
                                                                                                              </div>                                                        
                                                                                                              
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item >
                                                                                          <Nav.Item >
                                                                                                    <Nav.Link 
                                                                                                              eventKey="2"
                                                                                                              to="/responses"
                                                                                                              as={Link}
                                                                                                    >
                                                                                                              <div className="link link-text">
                                                                                                                        Responses
                                                                                                              </div>
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item >
                                                                                          <Nav.Item  >
                                                                                                    <div/>
                                                                                                    <Nav.Link 
                                                                                                               to="#"
                                                                                                               href="https://markdstrain.netlify.app/" 
                                                                                                               target="_blank"
                                                                                                    >  
                                                                                                              <div className="link link-text"
                                                                                                             

                                                                                                              >
                                                                                                                         Mark Strain🐇
                                                                                                              </div>                                                        
                                                                                                              
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item >
                                                                                </Nav>
                                                                      </Col>
                                                                      <Col className='pl-0' sm={12} lg={4} md={12} xl={3} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <Nav >
                                                                                          <Nav.Item >
                                                                                                    <Row >
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                            to="#"
                                                                                                                                            className='link link-icon' 
                                                                                                                                            href="https://www.linkedin.com/in/markdstrain/" 
                                                                                                                                            target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon' icon={['fab', 'linkedin-in']}/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                  to="#"
                                                                                                                                  className='link link-icon'
                                                                                                                                  href="https://github.com/markdstrain" 
                                                                                                                                  target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon' icon={['fab','github']}/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                            to="#"
                                                                                                                                            className='link link-icon'
                                                                                                                                            href="mailto:markdstrain@gmail.com"
                                                                                                                                            target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon ' icon={['far', 'envelope']} href="mailto:markdstrain@gmail.com"/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                    </Row>
                                                                                          </Nav.Item>
                                                                                </Nav>
                                                                      </Col>
                                                            </Row>
                                                  </Container>
                                        </Navbar.Collapse>
                              </Navbar>
                    </>
          )
}

export default InfoBar;