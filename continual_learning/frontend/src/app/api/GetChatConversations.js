import axios from "axios";

const GetChatConversations = async ({chat_id}) => {
        console.log(chat_id);
        console.log(typeof(chat_id));
        try{
            const response = await axios.post("http://127.0.0.1:5000/get_chat_conversations/" + 
            `${chat_id}`,{
               Headers : {
                   "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*"
               },
                  data : chat_id
            });
            return response.data.messages;
        }
        catch(error){
            console.log(error);
        }
        
}


export default GetChatConversations;