import React from "react"

const TodoForm = () => {
    return(
        <div>
            <form>
                <input
                    name="item"
                    value=""
                    type="text"
                    placeholder="Add Todo Here"

                />
            </form>
        </div>
    )
}

export default TodoForm