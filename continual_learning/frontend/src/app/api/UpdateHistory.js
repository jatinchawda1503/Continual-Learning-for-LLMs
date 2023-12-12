import axios from "axios";


const UpdateHistory = async () => {
        try{
            const response = await axios.get("http://127.0.0.1:5000/history",{
                Headers : {
                     "Content-Type": "application/json",
                      "Access-Control-Allow-Origin" : "*"
                }
            });
            return response.data.chat_ids || [];
        }
        catch(error){
            console.log(error);
        }

}
export default UpdateHistory;