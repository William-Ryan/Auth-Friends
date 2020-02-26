import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios"

export default function SignIn(props) {

    const [error, setError] = useState()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth().post("http://localhost:5000/api/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {
                setError(err.res.data.message)
            })
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    label="email"
                    placeholder="Email Here"
                    value={data.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    label="password"
                    placeholder="Password Here"
                    value={data.password}
                    onChange={handleChange}
                />

                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}