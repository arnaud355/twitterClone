import React, {useState,useEffect} from 'react';
import './TweetBox.css';
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('Posts').add({
            displayName: "Joe Doe",
            username: "Joe678",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.pinterest.fr/pin/352477108322644529/"
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.pinterest.fr/pin/352477108322644529/" />
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                    setvalue={tweetMessage} 
                    placeholder="What's happening" type="text" />
                   
                </div>
                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />

                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
