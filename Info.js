import React from 'react'
import { Avatar } from '@material-ui/core';
import './App.css';


function Info() {
    return (
        <div className="info">
            <div className="info__title">
                <div className="info__titleImg">
                    <Avatar className="info__titleAvatar" alt='Daniel' src="/static/images/avatar/1.jpg"/>
                </div>
                <div className="info__titleText">
                    <p><strong>Daniel</strong></p> 
                    <p className="info__subtitle">Daniel</p>
                </div>
                <div className="info__titleLink">
                    <p>switch</p>
                </div>
            </div>

            <div className="info__suggestion">
                <div>
                    <p className="info__suggestionText"><strong>Suggestions For You</strong></p>
                </div>
                <div>
                    <p className="info__suggestionAll">See All</p>
                </div>
            </div>

            <div className="info__suggestionAccounts">
                <div className="info__titleImg">
                    <Avatar className="info__titleAvatar" alt='John' src="/static/images/avatar/1.jpg"/>
                </div>
                <div>
                    <p className="info__titleText"><strong>John</strong></p>
                    <p className="info__subtitleS">Suggested for you</p>
                </div>
                <div>
                    <p className="info__titleLink_a">Follow</p>
                </div>
            </div>

            <div className="info__suggestionAccounts">
                <div className="info__titleImg">
                    <Avatar className="info__titleAvatar" alt='Hanna' src="/static/images/avatar/1.jpg"/>
                </div>
                <div>
                    <p className="info__titleText"><strong>Hanna</strong></p>
                    <p className="info__subtitleS">Suggested for you</p>
                </div>
                <div>
                    <p className="info__titleLink_a">Follow</p>
                </div>
            </div>

            <div className="info__suggestionAccounts">
                <div className="info__titleImg">
                    <Avatar className="info__titleAvatar" alt='Jenny' src="/static/images/avatar/1.jpg"/>
                </div>
                <div>
                    <p className="info__titleText"><strong>Jenny</strong></p>
                    <p className="info__subtitleS">Suggested for you</p>
                </div>
                <div>
                    <p className="info__titleLink_a">Follow</p>
                </div>
            </div>
        </div>
    )
}

export default Info
