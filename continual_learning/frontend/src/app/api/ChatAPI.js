import axios from "axios";
import 'dotenv/config'


const ChatAPI = async ({message_dict}) => {
    try{
        const response = await axios.post('http://127.0.0.1:5000/chat',{
           Headers : {
               "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
           },
              data : message_dict
        });
        console.log(response.data.response);
        return response.data.response;
    }
    catch(error){
        console.log(error);
    }
};

export default ChatAPI;