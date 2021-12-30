import './App.css';

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  return (
    <div className="container" data-test="component-app">
        <h1>Jotto</h1>
     <Congrats success={true} />
        <Input secretWord="party" />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 5}]} />
    </div>
  );
}

export default App;
