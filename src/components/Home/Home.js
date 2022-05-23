import React,{useState, useRef, useEffect} from 'react';
import { useData  } from './hooks'
import { Row, Container, Form, Card } from 'react-bootstrap';
import "./Home.css";

function Home(){
         
          const apiEngineRef = useRef();
          const promptRef = useRef();
          const [formData, setFormData] = useState([]);
          const [ data, getData, isLoading ] = useData();
          const [ button, setButton] = useState(true)
          

          const submitForm=(e) => {
                    e.preventDefault();
                    if(button === false){
                              alert("Please clear last Prompt")
                   }else if(promptRef.current.value === ""){
                              alert("Please Type something in the Prompt.");       
                   }else{
                             setFormData([promptRef.current.value, apiEngineRef.current.value]);
                             promptRef.current.value ='';
                             setButton(false);
                   }
          }

          const clearData=(e)=>{
                    e.preventDefault();
                    setButton(true);
          }
        
          useEffect(()=>{
                    if(formData.length > 1 ){
                              getData(formData);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                },[formData]);

         
          return( 

                    <div  className='home-container' autoPlay loop muted>
                              <Container className='home-body'>
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
                                        <Container className='title pt-5'>
                                                  <h2 className='mt-5 mb-1 text-center responsive'>Welcome to Mark Strain's Shopify Challenge Page.</h2>
                                        </Container>
                                        <Container className='home-content-container' >
                                                 <h3 className='home-words text-center responsive'>
                                                           Using <a className= 'openAI-link' href='https://openai.com/' target="_blank" >OpenAI</a>, We're going to have fun with AI!!
                                                  </h3>
                                        </Container>
                                        <Container>
                                                     <h5 className='home-small-words text-center responsive'>
                                                            Choose an option from the select box, type something in the Prompt Box and see how OpenAI responds.
                                                     </h5>
                                        </Container>
                                        <Container className='mb-3'>
                                                     <h5 className='home-small-words text-center responsive'>
                                                               Click the Responses link to see past prompts and responses.
                                                     </h5>
                                        </Container>          
                                           

                                        
                                        <Card className='form-card'>
                                                  <Form 
                                                            className='home-content-container mt-5'
                                                            onSubmit={submitForm}   
                                                  > 
                                                            <Row className='form-row'>
                                                                      <Form.Label className='form-label mb-0 answers'>
                                                                                Choose an option
                                                                      </Form.Label>
                                                                     <Form.Select className='form-box mb-2 answers' ref={apiEngineRef}>
                                                                                <option value="1">Translate a sentence to Spanish</option>
                                                                                <option value="2">Correct your grammar</option>
                                                                                <option value="3">Submit a query</option>
                                                                      </Form.Select>
                                                                      <Form.Label className='form-label mb-0 answers' >
                                                                                Prompt
                                                                      </Form.Label>
                                                                      <Form.Control className='form-box answers' as="textarea" rows={2}  type="string" ref={promptRef} />
                                                                      <button 
                                                                                className='home-button'
                                                                                type='submit'                                              
                                                                      >
                                                                                <ul>
                                                                                          <li>
                                                                                                    Submit
                                                                                                    <span></span><span></span><span></span><span></span>
                                                                                          </li>
                                                                                </ul>
                                                                      </button> 
                                                            </Row>
                                                  </Form>
                                        </Card>
                                        <Container className='response-container'>
                                                  {isLoading &&           
                                                            <div></div>
                                                  }
                                                  {!isLoading && !button &&
                                                            <div className='response-div'>
                                                                      <Row>
                                                                                <Card className='response-card mt-4 ml-5 pl-0 pr-0'>
                                                                                          <Container className='ml-5'>
                                                                                                    <div className='answers'>
                                                                                                              <h5>Prompt: {data.prompt}</h5>
                                                                                                    </div>
                                                                                                    <div className='answers'>
                                                                                                              <h5>Response: {data.result}</h5>
                                                                                                    </div>
                                                                                          </Container>  
                                                                                </Card>
                                                                      </Row>
                                                                      <Row>
                                                                                <button 
                                                                                          className='home-button'
                                                                                          onClick={clearData}                                             
                                                                                >
                                                                                          <ul>
                                                                                                    <li>
                                                                                                              Clear
                                                                                                              <span></span><span></span><span></span><span></span>
                                                                                                    </li>
                                                                                          </ul>
                                                                                </button>  
                                                                      </Row>

                                                            </div>
                                                            
                                                  }
                                        </Container>
                              </Container>
                    </div>
                   

          )
}

export default Home;
