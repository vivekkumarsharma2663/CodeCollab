import Button from "./Button";
import {useNavigate} from "react-router-dom";
function Hero(){
    const navigate=useNavigate();
    return(
        <div>
        
            <h1>CodeCollab</h1>
            <p>Real-Time Collaborative Coding Platform</p>

            <Button text="Create Room"
                    onClick={()=>navigate("/create-room")}
            />
            <Button text="Join Room"
                    onClick={()=>navigate("/join-room")}
            />
        </div>
    );
}

export default Hero;