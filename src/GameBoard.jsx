import { useState } from 'react'
import useFetchData from './useFetchData.js'
import { CategoryInfo } from './CategoryInfo.js'
import GameDetails from './GameDetails.jsx'

const COLS = 9
const ROWS = 8
const PLAYER_OPTIONS = [2, 3, 4, 5, 6, 8]

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

{/* gameboard squares */}
const tilePosition = (i) => {
  if (i < COLS) return { row: 1, col: i + 1 }
  if (i < COLS + ROWS - 2) return { row: i - COLS + 2, col: COLS }
  if (i < 2 * COLS + ROWS - 2) return { row: ROWS, col: COLS - (i - (COLS + ROWS - 2)) }
  return { row: ROWS - (i - (2 * COLS + ROWS - 2)) - 1, col: 1 }
}

function GameBoard() {
  const { records, loading, error } = useFetchData(
    "https://danielles-data-api.danielle-eversonriley.workers.dev/api/v1/datasets/game-list/records?limit=30"
  )
  const [selected, setSelected] = useState(0)
  const [players, setPlayers] = useState(0)
  const [lastRoll, setLastRoll] = useState(0)
  const [rolling, setRolling] = useState(false)

  if (loading) return <p>Loading games...</p>
  if (error) return <p>{error}</p>
  if (records.length === 0) return <p>No games found.</p>

  const tiles = records.slice(0, 30)
  const game = tiles[selected]
  

  
  const fits = (g) =>
    players === 0 || (Number(g.minPlayers) <= players && players <= Number(g.maxPlayers))
  const fitCount = tiles.filter(fits).length

  /* dice */
  const rollDice = () => {
    if (rolling) return
    const roll = randomNumber(1, 6)
    setLastRoll(roll)
    setRolling(true)

    let steps = 0
    let position = selected
    const hop = () => {
      position = (position + 1) % tiles.length
      setSelected(position)
      steps += 1
      if (steps < roll) {
        setTimeout(hop, 250)
      } else {
        setRolling(false)
      }
    }
    setTimeout(hop, 250)
  }

  return (
    <>  
    {/*instructions*/}
      <p className="board-intro">Step 1: count your friends. Step 2: roll the dice. Step 3: pretend it's about fun.</p>
    {/* players*/}
      <div className="controls">
        <div className="players">
          <span>Players needed:</span>
          <button className={players === 0 ? "chip active" : "chip"} onClick={() => setPlayers(0)}>
            Any
          </button>
          {PLAYER_OPTIONS.map((n) => (
            <button
              key={n}
              className={players === n ? "chip active" : "chip"}
              onClick={() => setPlayers(n)}
            >
              {n}
            </button>
          ))}
        </div>
        {players > 0 && (
          <p>{fitCount} of {tiles.length} games work for {players} players.</p>
        )}
        {/* dice button */}
        <div className="dice">
          <button className="roll" onClick={rollDice} disabled={rolling}>
            Roll the dice
          </button>
          {lastRoll > 0 && <span className="die">{lastRoll}</span>}
        </div>
       </div>
{/* square movement */}
      <div className="board">
        {tiles.map((g, i) => {
          const { row, col } = tilePosition(i)
          const color = CategoryInfo[g.category] ? CategoryInfo[g.category].color : "#6b7280"
          const classes =
            "tile" + (i === selected ? " selected" : "") + (fits(g) ? "" : " dim")
          return (
            <button
              key={g.slug}
              className={classes}
              style={{ "--row": row, "--col": col, borderTopColor: color }}
              onClick={() => setSelected(i)}
            >
              <strong>{g.name}</strong>
              <span>{g.year}</span>
            </button>
          )
        })}
{/*center badge */}
        <GameDetails game={game} />
      </div>
    </>
  )
}

export default GameBoard