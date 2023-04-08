import React from 'react'
import { Link } from 'react-router-dom'
import welcome from '../../assets/images/welcome.jpg'
export default function HomePage() {
    
    return (
        <div className="text-center">
            <img src = {welcome}/>
            <br/>
            {/* <h1 className="main-title home-page-title">Software Services</h1> */}
            <form action="/home">
                <p>
                    <label>Company Name</label><br/>
                    <input type="text" name="company_name" required />
                </p>
                <p>
                    <label>Head Quarters</label><br/>
                    <input type="text" name="hq" required />
                </p>

                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>

                <p>
                    <label>Select the location of service</label><br/>
                    <input type="radio" name="location"/>San Fransisco<br/>
                    <input type="radio" name="location"/>Seattle<br/>
                    <input type="radio" name="location"/>New York<br/>
                </p>
                <br/>

                <p>
                    <label>Select the type of service</label><br/>
                    <input type="checkbox" name="serviceType"/>API Services<br/>
                    <input type="checkbox" name="serviceType"/>Cloud Services<br/>
                    <input type="checkbox" name="serviceType"/>Database Services<br/>
                </p>
                
                <br/>
                <br/>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <Link to = "/submission">
                    <button className="primary-button">Submit</button>
                    </Link>
                </p>
            </form>
            
        </div>
    )
}
