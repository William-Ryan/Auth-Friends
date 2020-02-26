import React, { useState, useEffect } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"

export default function FriendsList(props) {

    const [friends, setFriends] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth().get("/api/friends")
            .then(res => {
                setFriends({
                    name: res.data.name,
                    age: res.data.age,
                    email: res.data.email
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Friends List</h1>
            <p>Name: {friends.name}</p>
            <p>Age: {friends.age}</p>
            <p>Email: {friends.email}</p>
        </div>
    )

}