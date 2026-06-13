
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button.jsx"
import axios from "axios";
function CreateRoom(){
    const[roomName,setRoomName]=useState("");
    const[userName,setUserName]=useState("");
    const[language,setLanguage]=useState("java");

    const navigate=useNavigate();
    async function handleCreateRoom() {

    if(roomName.trim()===""){
        alert("Please enter Room Name");
        return;
    }
    if(userName.trim()===""){
        alert("Please enter UserName");
        return;
    }
    try{
        const response=await axios.post(
            "http://localhost:5000/create-room",
            {
                roomName,
                userName,
                language
            }
        );
        const roomId=response.data.roomid;
        navigate(`editor/${roomId}`);
    }
    catch(error){
        console.log(error);
    }
    }
    return(
        
        <div>
                <h1>Create Room Page</h1>
        <input
        type="text"
        placeholder="Enter Room Name:"
        value={roomName}
        onChange={(e)=>setRoomName(e.target.value)}
        />

        <br/><br/>

        <input
        type="text"
        placeholder="Enter UserName: "
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        />

        <br/><br/>

        <select 
        value={language}
        onChange={(e)=>setLanguage(e.target.value)}
        >
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
        </select>

        <br/><br/>

        <Button 
        text="Create Room"
        onClick={handleCreateRoom}
        />
        </div>
        
    );
}

export default CreateRoom;