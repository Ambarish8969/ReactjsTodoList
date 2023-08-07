import React, { useState } from "react";
import './NotesApp.css'

const NotesApp = () => {
  let [note, setNote] = useState("");
  let [arr, setArr] = useState([]);

  const changeSet = (event) => {
    setNote(event.target.value);
  };

  const addNote = () => {
    if (note !== "") {
      setArr((olditems) => {
        return [...olditems, note];
      });
      setNote("");
    } else {
      alert("Field should not be empty. Please add something...");
    }
  };

  const deleteNote = (index) => {
    const newArr = [...arr]; // Create a copy of the array
    newArr.splice(index, 1); // Remove the item at the specified index
    setArr(newArr); // Update the state with the new array
  };

  return (
    <div>
      <div className="card-list">
        <h1 style={{color:"white"}}>Make a Todo List</h1>
        <input
          style={{ width: "20%", height: "100px" }}
          className="form-control"
          type="text"
          placeholder="Type here..."
          value={note}
          onChange={changeSet}
        />
        <br />
        <button className="btn btn-success" onClick={addNote}>
          Add
        </button>
        <br /><br />
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {arr.map((currentelement, index) => {
            return (
              <>
                <tr>
                  <td key={index}>
                    <h4 style={{color:"white"}}>
                      {index + 1}. {currentelement}
                    </h4>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteNote(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default NotesApp;
