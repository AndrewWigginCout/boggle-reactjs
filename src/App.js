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

function Hot(){
  setmString("M15");
}

const TableRow = (props) => {
  let content = [];
  for (let j = 0; j < N; j++){
    let c = getRandomChar();
    content.push(<td><button id={props.i*M+j} >{c}</button></td>)
  }
  let rv=<tr>{content}</tr>
  return (rv)
}

const Table = (props) => {
  let g = []
  for (let i=0; i < M; i++){
    g.push(<TableRow i={i}/>)}
  return(
    <table><tbody>
      {g}
    </tbody></table>)
}

  const [mString, setmString] = useState('COLD')
  const animals = [["Dog", "Bird", "Cat", "Mouse", "Horse"],
  ["Chicken","Raven","Possum","Monkey","Shrimp"]];
  const g = [["0","1","2"],
             ["A","B","C"],
             ["x","y","z"]]
  return (
    <div>
    <Table v={g}/>
    {mString}
    <button onClick={Hot}/>
    </div>
  );
};


export default App;
