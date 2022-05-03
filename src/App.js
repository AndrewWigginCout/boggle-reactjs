import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

function getRandomChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

const TableRow = (props) => {
  let content = [];
  for (let i = 0; i < 5; i++){
    content.push(<td><Greet char={getRandomChar()}/></td>)
  }
  return(<tr>{content}</tr>)
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
