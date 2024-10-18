import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="mainLanding"></div>
          <Navbar/>
        </div>
    );
}

export default HomePage;