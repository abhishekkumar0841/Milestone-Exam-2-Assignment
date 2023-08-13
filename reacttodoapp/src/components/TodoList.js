import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    // setListData([...listData, activity])

    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeHandler(i){
    const updatedListData = listData.filter((el, id)=>{
        return i!==id
    })
    setListData(updatedListData)
  }

  function removeAllHandler(){
    setListData([])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="add your todo"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add</button>

      {listData !== [] &&
        listData.map((data, i) => {
          return (
            <>
              <p key={i}>{data}</p>
              <button onClick={()=>removeHandler(i)}>Remove</button>
            </>
          );
        })}

        {listData.length >= 2 && <button onClick={removeAllHandler}>Remove All</button>}
    </div>
  );
};

export default TodoList;
