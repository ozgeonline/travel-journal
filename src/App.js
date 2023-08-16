import './App.css';
import Navbar from './components/Navbar';
import Separate from './components/Separate';
import data from "./data";

function App() {
  const cards = data.map(item => {
    return( <Separate {...item}  /> )
  })
  
  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  )
}

export default App;
