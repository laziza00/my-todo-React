import React, { useState } from 'react';
import './App.css';
import Todo from './Components/todo'


function App() {

  let [text, setText]= useState("")
  let [arr, setArr]=useState([])

  return (
    <div className="App">
      <Todo
        text={text}
        setText={setText}
        arr={arr}
        setArr={setArr}
          />
    </div>
  );
}

export default App;
