import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function NewFriend(props) {

    const [addFriend, setAddFriend] = useState ({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = e => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/api/friends", addFriend)
            .then(res => {
                console.log(res.data)
                localStorage.setAddFriend(res.data.payload)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => window.location.reload())
    }

    return (
        <div>
            <h2>Add A Friend</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        label="name"
                        placeholder="Name Here"
                        value={addFriend.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        type="text"
                        name="age"
                        label="age"
                        placeholder="Age Here"
                        value={addFriend.age}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        label="email"
                        placeholder="Email Here"
                        value={addFriend.email}
                        onChange={handleChange}
                    />

                    <button type="submit">Sign in</button>
            </form>
        </div>
    )

}