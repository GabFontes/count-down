import { useEffect, useState } from 'react';
import './App.css';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60;

function App() {
  const [secondsAmout, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS); 
  const minutes = Math.floor(secondsAmout / 60);
  const seconds = secondsAmout % 60;

  useEffect(() => {
    if (secondsAmout === 0) {
      alert('Timer zerado')
      return;
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1);
    }, 1000)
  }, [secondsAmout])

  return (
    <div>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}

export default App;
