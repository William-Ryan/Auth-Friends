import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import Friend from "./Friend"
import NewFriend from "./NewFriend"


export default function FriendsList(props) {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("/api/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Here Are Your Friends</h1>
            <NewFriend />
            <div>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
            </div>
        </div>
    )

}