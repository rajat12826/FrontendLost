import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import FindForm from "./components/Find";
import ReportForm from "./components/Report";
import Navbar from "./components/Navbar"; // Import Navbar component if you have it
import Login from "./components/Login";
import Register from "./components/Register";
import Match from "./components/Match";
import Item from "./components/Item";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar appears on all pages */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/find" element={<FindForm />} />
                    <Route path="/report" element={<ReportForm />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                   

                   <Route path="/items" element={<Item/>}/>                
                   </Routes>
            </div>
        </Router>
    );
}

export default App;