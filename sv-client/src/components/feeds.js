import React from 'react'
import staticFeeds from '../staticFeeds.json'
import optionslogo from '../assets/images/more.svg'

export const Feeds = () => {

    return (
        <div className="secrets-feed">
            {staticFeeds.map((feed, i) => (
                <div className="secrets-container">
                    <img className="profile-img" src={feed.imgUrl} alt="user" />
                    <div className="vertical-line"></div>
                    <h1>{feed.nickname}</h1>
                    <p>{feed.secret}</p>
                    <img className="settings-img" src={optionslogo} alt="secret-settings"/>
                </div>
            ))}
        </div>
    )
}