
import config from "../../../services/config.json";
import http from "../../../services/httpServices";
import { getTokenSession } from "../../utils/common";


function getData(url, setUpdate, targetData = ""){
    
    const authentication = getTokenSession();
    const secret = process.env.REACT_APP_SECRET;
    
    
    const headers = {
      secret: `${secret}`,
      authentication: `token ${authentication}`,
      "Content-Type": "multipart/form-data",
    };
  
    http.get(`${config.apiEndPoint}${url}`, {
      headers: {
        authentication: `token ${authentication}`,
      }, })
      .then((response)=>{
        if(targetData !==""){
          setUpdate(response.data.data[`${targetData}`])
        }
        else{
          setUpdate(response.data)
        }
  })
    .catch((error) => {
      console.log('response=>',error);
    });
    
}

export default getData;