import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

const TableRow = (props) => {
  return(
    <tr>
      {props.v.map(c => (
      <td><Greet char={c}/></td>
      ))}
    </tr>)
}

function App() {
  const animals = [["Dog", "Bird", "Cat", "Mouse", "Horse"],
  ["Chicken","Raven","Possum","Monkey","Shrimp"]];

  return (
    <div>
    <tr>
      {animals[0].map(animal => (
        <td><Greet char={animal}/></td>
      ))}
    </tr>
    <TableRow v={animals[1]}/>
    </div>
  );
};


export default App;
