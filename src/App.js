import React, { useState } from 'react';
import './App.css';
import Todo from './Components/todo'


function App() {

  let [text, setText]= useState("")
  let [arr, setArr]=useState([])
  let [filter, setFilter]= useState([])

  return (
    <div className="App">
      <Todo
        text={text}
        setText={setText}
        arr={arr}
        setArr={setArr}
        filter ={filter}
        setFilter ={setFilter}
          />
    </div>
  );
}

export default App;
