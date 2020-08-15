import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { db } from 'firestore/firestore'
import FlipMove from 'react-flip-move';
import TweetBox from 'components/TweetBox/TweetBox'
import Post from 'components/Post/Post'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                const posts = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        post: doc.data()
                    }
                })

                setPosts(posts)
            })
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />

            <FlipMove>

                {
                    posts.map(({ id, post }) => (
                        <Post
                            key={id}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            image={post.image}
                            avatar={post.avatar}
                        />
                    ))
                }
            </FlipMove>


        </div>
    )
}

export default Feed
