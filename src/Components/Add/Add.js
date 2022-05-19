import React from 'react'


function Add(props) {


    const inputText = (e) => {
        props.setText(e.target.value)
        console.log(e.target.value);
      }
    
      const submitFunc = (e) => {
        e.preventDefault();
    
        const changes = {
          text : props.text,
          isTrue : false
        }
        console.log(changes.text);
        props.setArr(changing => [...changing,  changes]);
        e.target.reset()
      }


  return (
    <div>
        <div className="todo__box">
        <input className="todo__filter" type="text" id="filter" placeholder="Search items..."/>
                <form className="todo__form" action="#" 
                id="form"
                onSubmit={submitFunc}>
                  <input className="todo__input"
                      type="text"
                      placeholder="add task" 
                      id="inputform"
                      name="text"
                      required
                      onChange={inputText}/>
                  <button className="btn add__btn" type = "submit" id="add" value="+">
                    <i className='bx bx-plus'></i>
                  </button>
                </form>
            
              </div>
    </div>
  )
}

export default Add