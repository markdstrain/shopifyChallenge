import moment from "moment";
const { Configuration, OpenAIApi } = require("openai");



class Api {
          static async getResponse(promptText){

                    const configuration = new Configuration({
                              apiKey: process.env.REACT_APP_SECRET_KEY,
                    });
                    const openai = new OpenAIApi(configuration);
                    const sentence = (parseInt(promptText[1]) === 1) ? `Translate the following to Spanish: ${promptText[0]}` 
                                                  : (parseInt(promptText[1]) === 2) ? `Correct this to standard English: ${promptText[0]}`
                                                  : `${promptText[0]}`;
                                                  
                    const temp = (parseInt(promptText[1]) === 1) ? 0.3 
                                            : (parseInt(promptText[1]) === 2)? 0.3
                                            : 0.8;
                    
                    const response = await openai.createCompletion("text-curie-001", {
                              prompt: sentence,
                              temperature: temp,
                              max_tokens: 200,
                               top_p: 1,
                              frequency_penalty: 0,
                              presence_penalty: 0,
                    })
          
                    const data = {prompt: sentence , result: response.data.choices[0].text, time: moment() }
                    
                    if(data){
                              const responses = JSON.parse(localStorage.getItem("responses")) ? JSON.parse(localStorage.getItem("responses")) : null;

                              if(responses){
                                        if(responses.length > 12){
                                                  const newResponse = responses.unshift(data);
                                                  const lessResponse = responses.pop();
                                                  (localStorage.setItem('responses', JSON.stringify(responses)))
                                        }else{
                                                  const newResponse = responses.unshift(data);
                                                  (localStorage.setItem('responses', JSON.stringify(responses)))
                                        }
                              }else{
                                        (localStorage.setItem('responses', JSON.stringify([data])));
                              } 
                    }
                    return data
          }
}

export default Api;
