import { useState } from 'react'

function LikeButton() {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  return <button onClick={addLike}>Like {likes}</button>
}

export default LikeButton
