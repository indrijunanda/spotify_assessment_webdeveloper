import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify'
import Logo from "./assets/Spotify_logo_with_text.svg";

function Login() {
    return (
        <div className="login">
            <img src={Logo} alt="" />
            <h1>Musik tanpa batas</h1>
            <p>Dengan Premium, kamu bisa memutar lagu apa saja, kapan saja. Kamu bahkan bisa mendengarkan saat offline. Tanpa batasan. Dengarkan musik bebas iklan.</p>
            <a href={ loginUrl }>Login with Spotify Account</a>
        </div>
    )
}

export default Login
