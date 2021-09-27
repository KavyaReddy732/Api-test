import { useState, useEffect } from 'react';
import './stories.css'

const FetchApi = () => {
    const [storyList, setStoryList] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json"
            );
            const userIdList = await result.json();
            const shuffled = userIdList.sort(() => 0.5 - Math.random());
            const slicedUserIdList = shuffled.splice(0, 10);

            let stories = await Promise.all(
                slicedUserIdList.map((id) => {
                    return fetch(
                        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                    ).then((res) => res.json());
                })
            );

            stories = await Promise.all(
                stories.map((story) => {
                    return fetch(
                        `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
                    )
                        .then((res) => res.json())
                        .then((user) => {
                            return { ...story, userId: user.id, userKarma: user.karma };
                        });
                })
            );
            setStoryList(stories);
        })();
    }, []);
    return (
        <div className="list">
            {storyList.sort((a, b) => a.score - b.score)
                .map(({ id, by, title, time, userKarma, score, url }) => (
                    <div key={id} className="grid-container">
                        <p>Title : {title}</p>
                        <p>Url : {url}</p>
                        <p>score : {score}</p>
                        <p>Time : {new Date(time).toLocaleTimeString("en-US")}</p>
                        <p>Author : {by}</p>
                        <p>Karma : {userKarma}</p>
                    </div>
                ))}
        </div>
    );
}

export default FetchApi;
