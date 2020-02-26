import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export default function SignIn(props) {

    const [error, setError] = useState()
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth().post("/api/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => {
                console.log(err)
                setError(err.res.data.message)
            })
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    placeholder="Username Here"
                    value={data.username}
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