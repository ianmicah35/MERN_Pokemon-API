import './App.css';
import Pokemon from './components/Pokemon';
// import axios from 'axios';


function App() {

  // const handleClick = (index) => {
  //   console.log("You've clicked the button");
  // }

  return (
    <div className="App">
      <Pokemon></Pokemon>

      {/* {
        pokemon.map((pokemon, i) => {
          return <Pokemon handleClick={handleClick} />
        })
      } */}
    </div>
  );
}

export default App;
