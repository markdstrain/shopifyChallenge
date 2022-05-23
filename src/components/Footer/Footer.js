import React from 'react';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

library.add(faLinkedinIn, faGithub, faEnvelope, faAngleDoubleUp);

function Footer(){
          
         return(
         <>
                    <Navbar className='footer'  fixed="bottom">
                              <Row className='icons-container'>
                                        <Col  className="column1" xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'right'}}>
                                                  <a className='link link-footer' 
                                                            href="https://www.linkedin.com/in/markdstrain/" 
                                                            target="_blank"
                                                            rel='noreferrer'
                                                  >
                                                            <FontAwesomeIcon className='link link-footer ' icon={['fab', 'linkedin-in']}/>
                                                  </a>
                                        </Col>
                                        <Col className='column2' xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                  <a className='link link-footer'
                                                            href="https://github.com/markdstrain" 
                                                            target="_blank"
                                                            rel='noreferrer'
                                                  >
                                                            <FontAwesomeIcon className='link link-footer' icon={['fab','github']}/>
                                                  </a>
                                        </Col>
                                        <Col className='column3' xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'left'}}>
                                                  <a className='link link-footer'
                                                            href="mailto:markdstrain@gmail.com"
                                                            target="_blank"
                                                            rel='noreferrer'
                                        >
                                                            <FontAwesomeIcon className='link link-footer ' icon={['far', 'envelope']} href="mailto:markdstrain@gmail.com"/>
                                                  </a>
                                        </Col>   
                              </Row>
                    </Navbar>
          </>
          )
}

export default Footer;