import React, { useEffect} from 'react'
import optionslogo from '../assets/images/more.svg'
import AddSecretForm from './addSecretForm'
import userImage from '../assets/images/no-img.png'
import { getFeeds } from '../utils/fetchFeeds'
import { feedState } from '../store/atoms'
import { useRecoilState } from 'recoil'

export const Feeds = () => {

    const [feeds, setFeeds] = useRecoilState(feedState)

    useEffect(()=> {
        getFeeds().then(data => {
            setFeeds(data)
        })
    }, [])

    return (
        <div className="secrets-feed">
            <AddSecretForm />
            {feeds.map((feed, i) => (
                <div className="secrets-container">
                    <img className="profile-img" src={feed.imgUrl ? feed.imgUrl : userImage} alt="user" />
                    <div className="vertical-line"></div>
                    <h1>{feed.nickname ? feed.nickname : 'Annonymous'}</h1>
                    <p>{feed.body}</p>
                    <img className="settings-img" src={optionslogo} alt="secret-settings" />
                </div>
            ))}
        </div>
    )
}