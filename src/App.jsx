import { useEffect, useState } from 'react'

const Card = ({ title, year, rating }) => {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)

  useEffect(() => {
    const savedLike = localStorage.getItem(`${title}-liked`)
    const savedCount = localStorage.getItem(`${title}-count`)

    if (savedLike === 'true') setLiked(true)
    if (savedCount) setLikesCount(Number(savedCount))
  }, [title])

  useEffect(() => {
    localStorage.setItem(`${title}-liked`, liked)
    localStorage.setItem(`${title}-count`, likesCount)
  }, [liked, likesCount, title])

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikesCount(likesCount - 1)
    } else {
      setLiked(true)
      setLikesCount(likesCount + 1)
    }
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>⭐ {rating}</p>

      <button className="like-btn" onClick={handleLike}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>

      <p className="like-count">
        {likesCount} Likes
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Netflix Movies</h1>

      <div className="card-container">
        <Card title="Stranger Things" year={2015} rating={9.9} />
        <Card title="Inception" year={2010} rating={8.8} />
        <Card title="Interstellar" year={2014} rating={8.6} />
        <Card title="The Dark Knight" year={2008} rating={9.0} />
        <Card title="MR. Robot" year={2016} rating={8.5} />
        <Card title="The End Game" year={2024} rating={7.8} />
        <Card title="Swiped" year={2025} rating={5.4} />
      </div>
    </div>
  )
}

export default App
