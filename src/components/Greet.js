import React from 'react'

const MyClick = () => {
  console.log("CLICK")
}

const Greet = (props) => <button onClick={MyClick}>{props.char[0]}</button>


export default Greet
