import {useState, useEffect} from 'react'
import './App.css';
import Greet from './components/Greet'

const N = 7
const M = 4

function getRandomChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function App() {

function setMy(c) {
  setmString(c);
}

const Hot = () => {
  setmString("M15");
}

const TableRow = (props) => {
  let content = [];
  for (let j = 0; j < N; j++){
    let c = getRandomChar();
    content.push(<td><button id={props.i*M+j} >{g[props.i][j]}</button></td>)
  }
  let rv=<tr>{content}</tr>
  return (rv)
}

const Table = (props) => {
  let g = []
  for (let i=0; i < M; i++){
    g.push(<TableRow i={i} g={props.v}/>)}
  return(
    <table><tbody>
      {g}
    </tbody></table>)
}

  const [mString, setmString] = useState('COLD')
  const g=[]
  for (let i = 0; i < M; i++){
    const row=[]
    for (let j = 0; j < N; j++){
      row.push(getRandomChar());}
    g.push(row);}
  console.log("g=",g);
  return (
    <div>
    <Table v={g}/>
    {mString}
    <button onClick={Hot}>TEST</button>
    </div>
  );
};


export default App;
