import "./style/App.css";
import Counter from "./components/Counter";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Box from "./components/Box";
// React Components =
// React Hooks == Various Function Built in to The react library to help manage the state of your application
// React Props =

// Tic Toe


export const sequence = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const playerHasWon = function (spaces, sequence) {
  for (const condition of sequence) {
    let [a, b, c] = condition

    if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
      return [a, b, c]
    }
  }
  return false
}

function App() {
  const [counter, setCounter] = useState(1);
  const [spaces, setSpaces] = useState(Array(9).fill(null));
  const [inPlay, setInPlay] = useState(true);
  const [player, setPlayer] = useState('X');
  const [score, setScore] = useState({ 'X': 0, 'O': 0 });

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  }, [counter]);

  function resetGame() {
    setSpaces(Array(9).fill(null))
    setPlayer('X')
    setInPlay(true)
  }

  const boxClick = (index) => {
    if (inPlay) {
      if (!spaces[index]) {
        const tempSpaces = spaces
        tempSpaces[index] = player
        setSpaces(tempSpaces)
        setPlayer(player === 'X' ? 'O' : 'X')

        if (playerHasWon(spaces, sequence)) {
          const scoreBoard = score
          switch (player) {
            case 'X':
              scoreBoard['X']++;
              break;
            case 'O':
              scoreBoard['O']++;
              break;
            default:
              break;
          }
          setScore(scoreBoard)
          setInPlay(false)
          alert(`Player ${player} Won`)
        }
        let a = tempSpaces.find((p) => {
          return p == null
        })
        console.log(a)
        if (a === undefined) {
          alert('Its a tie, Reset to play again')
          setInPlay(false)
        }
      } else {
        alert('piece already there')
      }
    } else {
      alert('Reset Game To Continue')
    }


  }

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,100px)',
        gap: '4px',
        width: 'fit-content',
        margin: '20px auto'
      }}>
        {spaces.map((j, i) => {
          return (
            <Box value={j} index={i} boxClick={boxClick} />
          )
        })}
      </div>

      <h1>Scores X: {score['X']}</h1>
      <h1>Scores O: {score['O']}</h1>

      <button
        onClick={resetGame}
      >
        Reset Game
      </button>
      <Counter counter={counter} />
    </div>
  );
}

export default App;
