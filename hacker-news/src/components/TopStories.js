import React, { useState, useEffect } from 'react'
import User from './User';
import './stories.css'

export default function TopStories({ state }) {
    const [stories, setStories] = useState([])

    useEffect(() => {
        (async () => {
            const result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${state}.json`)
            const response = await result.json()
            setStories(response);
        })();
    }, [state]);



    return (
        <li key={stories.score} className='grid-container'>
            <p>{stories.by}</p>
            <p>{stories.title}</p>
            <a href={stories.url}>link</a>
            <p>{stories.score}</p>
            <p>{stories.time}</p>
            <User idUser={stories.by} />
        </li>
    )
}

// Story title
// Story URL
// Story timestamp
// Story score
// Author id
// Author karma score

