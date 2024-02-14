import React, { useState } from "react";
import "../TodoList/TodoList.css";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    // setListData([...listData, activity])
    // console.log(listData);
    setListData((prevListData) => {
      if (activity !== "") {
        const newListData = [...prevListData, activity];
        console.log(newListData);
        setActivity("");
        return activity !== "" && newListData;
      } else {
        alert("Add Task");
        return prevListData;
      }
    });
  }
  function removeActivity(index) {
    const updatedListData = listData.filter((element, id) => {
      return index !== id;
    });
    setListData(updatedListData);
  }
  function removeAllActivity() {
    setListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add Activity</button>
        <p className="list-heading">Here is your List :{")"}</p>
        {listData.length > 0 &&
          listData.map((list, index) => (
            <div key={index} className="listData">
              {list}
              <div className="btn-position">
                <button onClick={() => removeActivity(index)}>remove(-)</button>
              </div>
            </div>
          ))}
        <br />
        <br />
        {listData.length >= 2 && (
          <button onClick={removeAllActivity}>REMOVE All</button>
        )}
      </div>
    </>
  );
}

export default Todolist;

// In React, state updates using setListData are asynchronous. When you call console.log(listData) immediately after updating the state with setListData, it may not reflect the updated state instantly due to the asynchronous nature of state updates.
//To ensure accurate logging, consider using the callback function within setListData
// or relying on the updated state in subsequent renders, using useEffect and specify listData as a dependency..
