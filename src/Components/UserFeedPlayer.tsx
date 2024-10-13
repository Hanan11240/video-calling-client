import { useEffect, useRef } from "react"

const UserFeedPlayer:React.FC<{stream:MediaStream}> = ({stream})=>{
    const vidoeRef = useRef<HTMLVideoElement>(null);
        useEffect(()=>{
            if(vidoeRef.current && stream){
                vidoeRef.current.srcObject =stream;
            }
        },[stream])
    return (
        <>
        <video 
        ref={vidoeRef} 
        style={{width:'300px',height:'200px'}} 
        muted={true} 
        autoPlay></video>
        </>
    )
}

export default UserFeedPlayer
