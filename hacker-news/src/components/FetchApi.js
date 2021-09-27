import { useState, useEffect } from 'react';
import TopStories from './TopStories';

const FetchApi = () => {
    const [state, setState] = useState([]);
    console.log(state)


    useEffect(() => {
        (async () => {
            const result = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            const response = await result.json();
            const shuffled = response.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 10);
            setState(selected);
        })();
    }, []);

    return (
        <div>
            {/* {state.map(element => <p>
                {element}
            </p>)} */}
            {state.map((element) => (
                <div>
                    <TopStories state={element} />
                </div>))}
        </div>
    )
}


export default FetchApi;
