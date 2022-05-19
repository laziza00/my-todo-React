import React from 'react'

function Sort(props) {

const filterItems =(e)=> {
  if(e.target.id==="all") {
    let sortItem = props.filter;
    props.setArr(sortItem)
  }
  else if(e.target.id==="complete") {
    let sortItem = props.filter.filter((item)=> {
      return item.isTrue===true;
    })
    props.setArr(sortItem)
  }else {
    let sortItem = props.filter.filter((item)=> {
      return item.isTrue===false
    })
    props.setArr(sortItem)
  }
}


  return (
    <div>
        <div className="todo__bottom">
            <button className="todo_all todo__button" id="all" onClick={filterItems}>
              All</button>
            <button className="todo_comp todo__button" id="complete" onClick={filterItems}>
              complete</button>
            <button className="todo_all todo__button" id="uncomplete" onClick={filterItems}>uncomplete</button>
       </div>
 </div>

  )
}

export default Sort