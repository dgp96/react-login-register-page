import React from 'react'
import { Link } from 'react-router-dom'
import register from '../../assets/images/register.jpg'
import '../../App.css'

export default function Submission() {

    return (
        <div className="text-center">
            <h1>Your Request has been successfully submitted!</h1>
            <p><Link to="/home">Back to Homepage</Link>.</p>
        </div>
        
    )
}