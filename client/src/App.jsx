import {
  BrowseRouter,
  Routes,
  Route,
}from "react-router-dom";

import Home from "./Pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";


function App(){
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/create-room" element={<CreateRoom/>}/>

        <Route path="/join-room" element={<JoinRoom/>}/>
      </Routes>
    </BrowseRouter>
  );
}

export default App;