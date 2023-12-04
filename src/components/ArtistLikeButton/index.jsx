import React, { useState } from 'react'


export const ArtistLikeButton = () => {
    const [like, setLike] = useState(false)
    
    function handleLike(e) {
        console.log(like)
        e.preventDefault()
        if (like === false) {
            e.target.previousSibling.classList.add('liked')
            e.target.innerHTML = 'Unlike'
            setLike(true)
        } else {
            e.target.previousSibling.classList.remove('liked')
            e.target.innerHTML = 'Like'
            setLike(false)
        }
    }

    return (
        <button onClick={handleLike}>Like</button>
    )
}
