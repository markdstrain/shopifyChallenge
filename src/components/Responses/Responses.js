import React, {useEffect}from 'react';
import moment from 'moment';
import { Row, Container, Form, Card } from 'react-bootstrap';
import "./Responses.css";

function Responses() {
          const responses = (localStorage.getItem("responses")) ? JSON.parse(localStorage.getItem("responses")) : null;
          

          return (
                              <div  className='home-container' autoPlay loop muted>
                                        <Container className='response-body'>
                                                 <video className='home-page-video'
                                                              autoPlay
                                                              loop 
                                                              muted
                                                              style={{
                                                                        position: "absolute",
                                                                        width: "100vw",
                                                                        left: "50%",
                                                                        top: "50%",
                                                                        height:"100vh",
                                                                        objectFit: "cover",
                                                                        transform: "translate(-50%, -50%)",
                                                                        zIndex: "-1",
                                                                        overflow:'hidden'
                                                              }}>
                                                           <source src='./static/art.mp4' />
                                                 </video>
                                                 <Container className='card-container'>
                                                           <Container >
                                                                     <h3 className='response-title text-center'>These are you past Responses</h3>
                                                           </Container>
                                                            {!responses &&
                                                                      <Card className='empty-card text-center'>
                                                                                It looks like you don't have any past responses.
                                                                      </Card>
                                                            }
                                                            {responses &&
                                                                      responses.map(r =>
                                                                                <Card className='filled-card mb-3' key={r.time}>
                                                                                          <div>
                                                                                                   Prompt : {r.prompt},
                                                                                          </div>
                                                                                          <div>
                                                                                                   Result:  {r.result}
                                                                                                   <span className='time'>{moment(r.time).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                                                                          </div>
                                                                                         
                                                                                </Card>          
                                                                      )
                                                            }
                                                  </Container>
                                                 

                                        </Container>
                              </div>
                    
          )
}

export default Responses;

