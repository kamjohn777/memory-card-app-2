import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import GameRules from './Components/GameRules'

function App() {
  const [count, setCount] = useState(0)

  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const [difficultyLevel, setDifficultyLevel] = useState([]);
  const [charactersToPlayWith, setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay, setCharactersToDisplay] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadingOver(true);
  //   }, 3700);
  // }, []);


  
  const goBackToStartPage = () => {
    setDifficultyLevel([]);
    charactersToPlayWith.forEach(character => {
      character.clicked = false;
  });
  };

  const playFlip = () => {
    if(isSoundPlaying) {
      const audio = new Audio(flipSound);
      audio.volume = 0.2;
      audio.play();
    }
  };

  const playClick = () => {
    if(isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.07;
      audio.play();
    }
  };

  return (
    <>
      <div>
        <Card />
      </div>
      <footer className='footer-class'>
      <GameRules />
      </footer>
    </>
  )
}

export default App
