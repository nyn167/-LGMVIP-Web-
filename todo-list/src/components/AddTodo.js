import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";

function AddTodo() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button>Add</button>
      </div>
    </Form>
  );
}

export default AddTodo;

const Form = styled.form`
  width: 100%;
  margin: 10px 0 20px;

  input {
    background-color: #202224;
    border: #fff solid 2px;
    width: 20rem;
    height: 50px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    color: #fff;
    padding-left: 15px;
  }

  .btn-container {
    width: fit-content;
    margin: auto;
    margin-top: 20px;

    button {
      font-size: 20px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      padding: 5px 10px;
      background-color: #ffc107;
      border: none;
      color: #202224;
      transition: cubic-bezier(0.47, 0, 0.745, 0.715);
      transition-duration: 0.2ms;

      &:hover {
        background-color: white;
        color: #ffc107;
      }
    }
  }
`;
