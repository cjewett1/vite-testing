import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import './scss/main.scss';

function App() {
const [count, setCount] = useState(0);

function counterFunction(e) { 
  e.preventDefault();
  setCount(count + 1);
};

  return (
    <div>
      <Header />
      <button onClick={counterFunction}>Click here to increase the counter!</button>
      <p>{count}</p>
    </div>
  )
}

export default App

//npm run build when ready for production
