import React from "react"

const Todo = (props) => {
    const { todo } = props;

    return (
        <div>
            <p>{todo.item}</p>
        </div>
    )  
};

export default Todo