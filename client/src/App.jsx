import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";

import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Editor from "./pages/Editor";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/create-room" element={<CreateRoom/>}/>

        <Route path="/join-room" element={<JoinRoom/>}/>

        <Route path="/editor/:roomid" element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;