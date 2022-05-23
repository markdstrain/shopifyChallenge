import { useState } from "react";
import Api from "../API/api"; 

const useData = () => {
          
          const [data , loadData] = useState()
          const [isLoading,changeLoading] = useState(true)

          const getData =async(formData) => {
                   
                    const data= await Api.getResponse(formData);
                              loadData(() => data);
                              changeLoading(false);
                    }
                    
           return [data , getData , isLoading];      
}

export{useData}