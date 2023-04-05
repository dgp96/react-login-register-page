import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'
import welcome from '../../assets/images/welcome.jpg'

export default function LandingPage() {
    const locations = ["San Fransisco","Seattle","New York"];
    const locationElement = locations.map(loc=><li>{loc}</li>)
    return (
        
        <header style={ HeaderStyle }>
            <img src = {welcome}  />
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div style = {{textAlign: "center"}}>
            <h1 style={{color:"white"}}>Our locations are:</h1>
            <ol style={{color:"white"}}>{locationElement}</ol>
            </div>
            
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}