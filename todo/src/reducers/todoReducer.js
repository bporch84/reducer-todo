export const initialState = {
    todo: [
       {
        item: "Buy groceries",
        completed: false,
        id: 1
       },
       {
        item: "Do laundry",
        completed: false,
        id: 2
       }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state; 
    }
};