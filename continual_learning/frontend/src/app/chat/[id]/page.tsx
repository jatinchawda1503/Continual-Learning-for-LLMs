import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";


export default function Page({params} :
    {params: {id: string}}) {

    return (
        <ChatArea/>
    );
}
