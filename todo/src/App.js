import React, { useState, useReducer } from "react"
import { initialState, reducer } from "./reducers/todoReducer"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import styled from "styled-components"

const StyledApp = styled.div`
  width: 80%;
  height: 100vh;
  overflow:hidden;
  border-left: 15px double #05445E;
  border-right: 15px double #05445E;
  margin: 0 auto;

    h1 {
      color: #D4F1F4;
      width: 80%;
      margin: 20px auto;
      text-align: center;
      font-family: monospace;
      font-size: 75px;
      text-shadow: 4px 4px 3px #75E6DA;
      border: 2px #05445E dashed;
    }
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <StyledApp>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList state={state.todo} />
    </StyledApp>
  );
}

export default App;
