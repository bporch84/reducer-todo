import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    const { state } = props;

    return (
        <div>
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
};

export default TodoList