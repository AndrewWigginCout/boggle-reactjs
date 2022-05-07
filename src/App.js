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

const Reset = () => {
  setmString("");
  set_ui_coords([])
}

function adjacent(j,i,y,x,N){
  if (j==y && i==x) {return false}
  if ((y-j)*(y-j)+(x-i)*(x-i) <= 2){return true}
}
const MyBtnHandler = (i,j) => {
  {/*setmString(mString+g[i][j]+String(i)+String(j));
  {/*console.log("g,i,j=",g[i][j],i,j);*/}
  setmString(mString+g[i][j])
  let cp = i*N+j; //current position
  set_ui_coords(ui_coords.concat([[i,j]]))
  let sz = ui_coords.length
  if (sz > 0 ){
    let pp=ui_coords[ui_coords.length-1];//previous position
    {/*console.log("last=",pp)*/}
    {/*let ip = Math.floor(pp / N)
    let jp = pp % N*/}
    let j2 = pp[1];
    let i2 = pp[0];
    {/*console.log("ip,jp=",ip,jp)*/}
    if (i2==i && j2==j){
      setmString(mString+"same coord");
      set_ui_coords([]);
      return}
    if (adjacent(i,j,i2,j2,N)){
      setmString(mString+"link")
    }
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

  const [mString, setmString] = useState('')
  const tempg=[]
  for (let i = 0; i < M; i++){
    const row=[]
    for (let j = 0; j < N; j++){
      row.push(getRandomChar());}
    tempg.push(row);}
  const [g, setg] = useState(tempg)
  const [ui_coords, set_ui_coords] = useState([])
  return (
    <div>
    <Table g={g}/>
    {mString}
    <button onClick={Reset}>Reset</button>
    <ShowCoords/>
    </div>
  );
};


export default App;
