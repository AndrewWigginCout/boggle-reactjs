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

const Table = (props) => {
  return(
    <table>
      {props.v.map(r => (
      <TableRow v={r} />
      ))}
    </table>)
}

function App() {
  const animals = [["Dog", "Bird", "Cat", "Mouse", "Horse"],
  ["Chicken","Raven","Possum","Monkey","Shrimp"]];
  const g = [["0","1","2"],
             ["A","B","C"],
             ["x","y","z"]]
  return (
    <pre>
    <Table v={g}/>
    Hello World</pre>
  );
};


export default App;
