
function GameList() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'boardGames.json')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <div>
      {games.map(game => (
        <article key={game.id}>
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