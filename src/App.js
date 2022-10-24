import { useState } from "react";
import {Routes,Route,Navigate} from "react-router-dom"
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";


function App() {
  const active = true;
  return (
    <div className="side-container">
        {
          active 
          ?
            <Layout />
          :
          (
           <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
           </Routes>)
        }
    </div>
  );
}

export default App;
