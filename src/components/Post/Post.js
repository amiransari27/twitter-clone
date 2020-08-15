import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(
    (props, ref) => {

        const {
            displayName,
            username,
            verified,
            text,
            image,
            avatar
        } = props

        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar alt={displayName} src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName} {" "}
                                <span className="post__specialHeader">
                                    {
                                        verified &&
                                        <VerifiedUserIcon className="post__badge" />
                                    }
                                    {" "}@{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>

                    <img className="post__image"
                        src={image}
                        alt="" />

                    <div className="post__footer">
                        <ChatBubbleOutlineIcon />
                        <RepeatIcon />
                        <FavoriteBorderIcon />
                        <PublishIcon />
                    </div>

                </div>
            </div>
        )
    }
)

export default Post
