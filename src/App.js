import {useState, useEffect} from 'react'
import Wordlist from './niceware.js'
//When you use default export you don't need to destructure
import './App.css';

const N = 5
const M = 5

function getRandomChar() {
  const dice = [
  ["T","W","O","O","T","A"],
  ["H","N","E","E","W","G"],
  ["S","A","F","P","K","F"],
  ["E","R","L","I","D","X"],
  ["Y","E","D","L","E","V"],
  ["Y","T","D","T","I","S"],
  ["V","E","H","W","T","R"],
  ["M","U","O","C","T","I"],
  ["U","I","E","N","S","E"],
  ["N","L","N","H","Z","R"],
  ["I","S","S","O","E","T"],
  ["T","R","E","T","L","R"],
  ["E","A","N","A","G","E"],
  ["U","N","H","I","QU","M"],
  ["O","S","C","A","H","P"],
  ["O","A","B","B","J","O"],
  ];
  const die = Math.floor(Math.random()*dice.length);
  const roll = Math.floor(Math.random()*6);
  return dice[die][roll];
}
function App() {

function setMy(c) {
  setmString(c);
}

const Reset = () => {
  setmString("");
  set_ui_coords([])
}
const NewBoard = () =>{
  setmString("");
  set_ui_coords([]);
  set_ui_wordlist([]);
  setg(makegrid());}
  
const SubmitWord = () => {
  if (ui_coords.length==0) return;
  set_ui_wordlist(ui_wordlist.concat([ui_coords]))
  set_ui_coords([])
  setmString("")
}
const CalculatePoints = () => {
  let rv3 = ui_wordlist.map( (e) => (e.reduce((x,y) => {return x+g[y[0]][y[1]]},"") ))
  let score = 0;
  let d = {1:0,2:0,3:1,4:1,5:2,6:3,7:5,8:11,9:11,10:11,11:11,12:11,13:11}
  for (let i=0; i<rv3.length; i++){
    if (Wordlist.includes(rv3[i].toLowerCase())) {score+=d[rv3[i].length];}
  }
  set_ui_score(score);
}

function rand(n){
  return Math.floor(Math.random()*n);}

function permutation(N){
  let rv=[];
  let v=[];
  for (let i=0; i<N; i++){
    v.push(i);}
  for (let j=0; j<N; j++){
    let r=rand(N-j);
    rv.push(v[r]);
    v.splice(r,1);}
  return rv;}

function adjacent(j,i,y,x){
  if (j==y && i==x) {return false}
  if ((y-j)*(y-j)+(x-i)*(x-i) <= 2){return true}
}
function includes(i,j,n){
  for (let e of n){
    if (e[0]==i && e[1]==j) {return true;}}
  return false;}

const MyBtnHandler = (i,j) => {
  {/*setmString(mString+g[i][j]+String(i)+String(j));
  {/*console.log("g,i,j=",g[i][j],i,j);*/}
  let cp = i*N+j; //current position
  let sz = ui_coords.length
  if (sz == 0 ){
    set_ui_coords(ui_coords.concat([[i,j]]));
    setmString(g[i][j]);}
  else{
    let pp=ui_coords[ui_coords.length-1];//previous position
    {/*console.log("last=",pp)*/}
    {/*let ip = Math.floor(pp / N)
    let jp = pp % N*/}
    let j2 = pp[1];
    let i2 = pp[0];
    {/*console.log("ip,jp=",ip,jp)*/}
    if (i2==i && j2==j){
      console.log(mString+"same coord");
      return}
    if (adjacent(i,j,i2,j2) && ! includes(i,j,ui_coords)){
      setmString(mString+g[i][j])
      set_ui_coords(ui_coords.concat([[i,j]]))
    }
  }
}
const ShowCoords = () => {
  return (<h1>{JSON.stringify(ui_coords)}</h1>)
}

const ShowUiWordlist = () => {
  return (<h1>{JSON.stringify(ui_wordlist)}</h1>)
}

function grabletter(s,e){
  return s + g[e[0]][e[1]];
}
function g2(s,e){
  return s+e;
}
const ShowUiWordlist2 = () => {
  let rv3 = ui_wordlist.map( (e) => (e.reduce((x,y) => {return x+g[y[0]][y[1]]},"") ))
  return (<h1>{rv3.join("-")}</h1>)
}
const ShowScore = () => {
  if (ui_score) {
    return (<div>You have scored {ui_score} point(s).</div>)}
  else {
    return (<div/>)}}

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
function makegrid(){
  const tempg=[]
  for (let i = 0; i < M; i++){
    const row=[]
    for (let j = 0; j < N; j++){
      row.push(getRandomChar());}
    tempg.push(row);}
  return tempg;}
  const [g, setg] = useState(makegrid())
  const [ui_coords, set_ui_coords] = useState([])
  const [ui_wordlist, set_ui_wordlist] = useState([])
  const [ui_score, set_ui_score] = useState(0);
  return (
    <div>
    <h1>Welcome to my Boggle implementation in React JS.</h1>
    <div>You can play this game by clicking words from the letters availabe.
      Cells must be adjacent and cells cannot be repeated.
      After you complete a word click "Submit Word" to stash it in your bank.
      When you have exhausted your search, click "Calculate Points" to determine your score.
    </div>
    <Table g={g}/>
    <br/>
    Word: {mString}<br/>
    <ShowUiWordlist2/>
    <button onClick={Reset}>Reset current word</button><br/>
    <button onClick={NewBoard}>New Board</button><br/>
    <button onClick={SubmitWord}>Submit Word</button><br/>
    <button onClick={CalculatePoints}>Calculate Points</button><br/>
    <ShowScore/>
    <ShowCoords/>
    <ShowUiWordlist/>
    </div>
  );
};


export default App;
