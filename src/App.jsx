import Header from './Header.jsx'
import LikeButton from './LikeButton.jsx'
import { useState } from 'react'
import Welcome from './Welcome.jsx'
import Tonight from './Tonight.jsx' 
import Footer from './Footer.jsx'
import './App.css'
import './BoardGame.css'
import GameBoard from './GameBoard.jsx'
import CategoryKey from './CategoryKey.jsx'

function App() {
  const imageUrl = "https://images.unsplash.com/photo-1741321650126-32cbd6990f94?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3Ds://images.unsplash.com/photo-1789948731559-5d113d8744b6?w=400&h=250&fit=crop&auto=format"
  const [votes, setVotes] = useState(3)
  const startOver = () => {
    setVotes(0)
  }

    return (
    <><div className="card">
        <Header />
        <Welcome />
      <br />
      <br />  
        <GameBoard />  
        <CategoryKey /> 
        <Footer />
      </div>
      
      <div>
          <body />
      </div></>

  )

}

export default App


