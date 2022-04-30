import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

  return (
    <ul>
      {animals.map(animal => (
        <li>{animal}</li>
      ))}
    </ul>
  );
};


export default App;
