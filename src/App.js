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
  setmString(mString+g[i][j]+String(i)+String(j));
  console.log("i,j=",i,j);
  set_ui_coords(ui_coords.concat(i*N+j))
  let sz = ui_coords.length
  if (sz > 0 ){
    let pp=ui_coords[ui_coords.length-1]
    console.log("last=",pp)
    let ip = Math.floor(pp / N)
    let jp = pp % N
    console.log("ip,jp=",ip,jp)

}}

const ShowCoords = () => {
  return (<h1>{JSON.stringify(ui_coords)}</h1>)
}

const TableRow = ({row,i}) => {
  let content = row.map((cell,j) => (<td key={i*M+j}><button onClick={() => MyBtnHandler(i,j)}>{cell}</button></td>))
  let rv=<tr>{content}</tr>
  return (rv)
}

const Table = ({g}) => {
  let table = g.map((row,i) => (<TableRow key={300+i} row={row} i={i}/>));
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
  const [ui_coords, set_ui_coords] = useState([])
  return (
    <div>
    <Table g={g}/>
    {mString}
    <button onClick={Heat}>TEST</button>
    <ShowCoords/>
    </div>
  );
};


export default App;
