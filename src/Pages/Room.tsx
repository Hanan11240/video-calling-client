import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import UserFeedPlayer from "../Components/UserFeedPlayer";

const Room:React.FC = ()=>{
    const {id} = useParams();
    const fetchParticipantList = ({ roomId, participants }: { roomId: string, participants: string[] }) => {
        console.log("Fetched room participants");
        console.log(roomId, participants);
    }
    const {socket,user,stream} = useContext(SocketContext);
    useEffect(()=>{
       if(user){
        socket.emit("join-room",{roomId:id,peerId:user._id});
       socket.on('get-users', fetchParticipantList)
       } 
    },[id,user,socket])
    return(
        <div>
            room: {id}
            <UserFeedPlayer stream={stream}/>
        </div>
    )
}


export default Room;
