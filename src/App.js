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

const Heat = () => {
  setmString("HOT");
}

const MyBtnHandler = (i,j) => {
  console.log("i,j=",i,j);
  setmString(mString+g[i][j]);
}

const TableRow = ({row,i}) => {
  let content = row.map((cell,j) => (<td><button id={i*M+j} onClick={() => MyBtnHandler(i,j)}>{cell}</button></td>))
  let rv=<tr>{content}</tr>
  return (rv)
}

const Table = ({g}) => {
  let table = g.map((row,i) => (<TableRow row={row} i={i}/>));
  return(
    <table><tbody>
      {table}
    </tbody></table>)
}

  const [mString, setmString] = useState('COLD')
  const tempg=[]
  for (let i = 0; i < M; i++){
    const row=[]
    for (let j = 0; j < N; j++){
      row.push(getRandomChar());}
    tempg.push(row);}
  console.log("tempg=",tempg,JSON.stringify(tempg));
  const [g, setg] = useState(tempg)
  return (
    <div>
    <Table g={g}/>
    {mString}
    <button onClick={Heat}>TEST</button>
    </div>
  );
};


export default App;
