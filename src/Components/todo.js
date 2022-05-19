import React from 'react'
import './todo.css'
import Add from './Add/Add'
import Item from './Item/Item'
import Sort from './Sort/Sort'

function Todo (props) {
  return (
      <div >
        <div className="todo">
          <div className="container">
            <div className="todo__inner">
              <div className="todo__box">
              <Add
                setText={props.setText} 
                text={props.text}
                arr={props.arr}
                setArr={props.setArr}
                 />
            
              </div>
              <ul className="todo__list">
                  {props.arr.map((item, index) => {
                    return <Item
                      key={index + 1}
                      id={index} 
                      text={item} 
                      arr={props.arr}
                      setArr={props.setArr}
                      filter ={props.filter}
                      setFilter={props.setFilter}
                    />
                  }) }
            </ul>
            <Sort  
                 arr={props.arr}
                 setArr={props.setArr}
                 filter ={props.filter}
                 setFilter={props.setFilter}/>
              <div className="todo__bottom">

              </div>
            </div>
          </div>
        </div>
            </div>
  )
}

export default Todo