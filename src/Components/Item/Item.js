import React from 'react'

function Item(props) {

  const checkCheck =(e)=> {
      if(e.target.type===true
        ) {
        console.log("ok");
      }
  }

  const removeItem = () => {
    let items = props.arr.filter((_, index) => {
      return index !== props.id;
    });
    props.setArr(items);
  }

  return (
    <div>
    <li className='todo__item'>
        <p className="todo__text">{props.text.text}</p>
        <div className='todo__btnBox'>
          <input type="checkbox" onChange={checkCheck}/>
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