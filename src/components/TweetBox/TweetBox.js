import React from 'react'
import firebase from "firebase"
import "./TweetBox.css"
import { Button, Avatar } from '@material-ui/core'
import { useState } from 'react'
import { db } from 'firestore/firestore'
import { getRandomUser } from "firestore/fakeUser";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault()
        const user = getRandomUser()

        db.collection("posts").add({
            displayName: user.displayName,
            username: user.username,
            verified: user.verified,
            text: tweetMessage,
            image: tweetImage,
            avatar: "/static/images/avatar/1.jpg",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form onSubmit={sendTweet}>
                <div className="tweetBox__input">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <input
                        type="text"
                        placeholder="What's happening"
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Optional: Enter image URL" />
                <Button
                    type="submit"
                    className="tweetBox__tweetButton"
                >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
