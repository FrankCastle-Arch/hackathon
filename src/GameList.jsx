import useFetchData from './useFetchData.js'

function GameList() {
  const { records, loading, error } = useFetchData(
    "https://danielles-data-api.danielle-eversonriley.workers.dev/api/v1/datasets/game-list/records?limit=30"
  )

  

  if (loading) return <p>Loading games...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      {records.map(game => (
        <article key={game.slug}>
          <h3>{game.name} ({game.year})</h3>
          <p>{game.description}</p>
          <p>
            {game.minPlayers}-{game.maxPlayers} players · {game.complexity} · {game.category}
          </p>
        </article>
      ))}
    </div>
  )
}

export default GameList