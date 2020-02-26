import React from "react"

export default function Friend(props) {

    return (
        <div>
            <h2>Name: {props.friend.name}</h2>
            <h3>Email: {props.friend.email}</h3>
            <h3>Age: {props.friend.age}</h3>
        </div>
    )
}