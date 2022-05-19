import React from 'react'

function Item(props) {

  const removeItem = () => {
    let items = props.arr.filter((_, index) => {
      return index !== props.id;
    });
    props.setArr(items);
    props.setFilter(items)
  }

  const checkInput =(e)=> {
    if(e.target.id==="uncomplete") {
      e.target.id ="complete"
    

      let otherTemp = props.arr.map((item, index)=> {
        if(index !==props.id) {
          return item;
        }
        else {
          return {text: item.text, isTrue: true}
        }
      })
      props.setArr(otherTemp);
      props.setFilter(otherTemp)
    }else {
      e.target.id="uncomplete";

      let otherTemp = props.arr.map((item, index)=> {
          if(index !==props.id) {
            return item;
          }
          else {
            return {text: item.text, isTrue: true}
          }
      })
      props.setArr(otherTemp);
      props.setFilter(otherTemp)
    }
}






  return (
    <div>
    <li className='todo__item'>
        <p className="todo__text">{props.text.text}</p>
        <div className='todo__btnBox'>
        <button className='btn remove__btn' id="uncomplete" onClick={checkInput}><i className='bx bx-check'></i> 
      </button>
        <button className="btn remove__btn"  
          id={props.id} 
          onClick={removeItem}>
         <i className='bx bx-trash'></i>
        </button>
        </div>

    </li>
    </div>
  )
}

export default Item