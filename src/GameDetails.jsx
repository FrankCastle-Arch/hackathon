import { CategoryInfo } from './CategoryInfo.js'

function GameDetails({ game }) {
  const info = CategoryInfo[game.category]

  return (
    <article className="center">
      <h3>{game.name} ({game.year})</h3>
      <span className="badge" style={{ background: info ? info.color : "#6b7280" }}>
        {info ? info.label : game.category}
      </span>
      <p>{game.description}</p>
      <p>
        {game.minPlayers}-{game.maxPlayers} players · {game.minPlayTime}-{game.maxPlayTime} min · {game.complexity}
      </p>
      <p>Designed by {game.designer}</p>
    </article>
  )
}

export default GameDetails