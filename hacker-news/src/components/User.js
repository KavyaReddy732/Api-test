import React, { useState, useEffect } from 'react';

const User = ({ idUser }) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        (async () => {
            const result = await fetch(`https://hacker-news.firebaseio.com/v0/user/${idUser}.json`)
            const response = await result.json();
            setUser(response);
        })();
    }, [idUser]);


    return (
        <>
            {
                (user.id === idUser) ?
                    <div>Karma Score : {user.karma} </div> : null
            }

        </>
    )
}

export default User
