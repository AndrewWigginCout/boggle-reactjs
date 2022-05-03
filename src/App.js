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
  for (let i = 0; i < 8; i++){
    content.push(<td><Greet char={getRandomChar()}/></td>)
  }
  let rv=<tr>{content}</tr>
  console.log(rv)
  return (rv)
}

const Table = (props) => {
  let g = []
  for (let i=0; i < 5; i++){
    g.push(<TableRow/>)}
  return(
    <table>
      {g}
    </table>)
}

function App() {
  const animals = [["Dog", "Bird", "Cat", "Mouse", "Horse"],
  ["Chicken","Raven","Possum","Monkey","Shrimp"]];
  const g = [["0","1","2"],
             ["A","B","C"],
             ["x","y","z"]]
  return (
    <div>
    <Table v={g}/>
    Hello World</div>
  );
};


export default App;
