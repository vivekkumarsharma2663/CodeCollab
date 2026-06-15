import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Codeeditor from "../components/Codeeditor";
import "../styles/editor.css";

function Editor() {

    const { roomId } = useParams();
    const[code,setCode]=useState("// Start Coding...");
    const[language,setLanguage]=useState("java");
    const[output,setOutput]=useState("");

    async function handlerunCode(){
    try{

        const response=await axios.post(

            "http://localhost:5000/run-code",

            {

                code,

                language

            }

        );
        setOutput(response.data.output);

    }
    catch(error){

        console.log(error);

    }
    }

    return (

        <div className="editor-page">

            <div className="navbar">

                <h2>CodeCollab</h2>

                <div>

                    Room :
                    {roomId}

                </div>

            </div>

            <div className="workspace">

                <div className="sidebar">

                    <h3>Participants</h3>

                </div>

                <div className="editor-area">

                    <Codeeditor
                    code={code}
                    setCode={setCode}
                    />

                </div>

            </div>

            <div className="bottom">

                <div>

                    <div className="controls">

                <select
                value={language}
                onChange={(e)=>setLanguage(e.target.value)}
                >

                    <option value="java">
                   Java
                    </option>

                     <option value="cpp">
                    C++
                    </option>

                    <option value="python">
                     Python
                    </option>

                    <option value="javascript">
                        JavaScript
                    </option>

                </select>

                <button onClick={handlerunCode}>
                    Run
                </button>

                </div>

                </div>

                <div>

                        <div>

                            <h3>Output</h3>

                            <p>{output}</p>

                        </div>

                </div>

            </div>

        </div>

    );

}

export default Editor;