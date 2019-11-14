const initialState = {
  toDoArray: [
    {
      id: 0,
      dateCreated: "Add date format here",
      title: "To do number 1 (pre-filled)",
      Completed: false,
      description: null
    },
    {
      id: 1,
      dateCreated: "Add date format here",
      title: "To do number 2 (pre-filled)",
      Completed: false,
      description: null
    },
    {
      id: 2,
      dateCreated: "Add date format here",
      title: "To do number 3 (pre-filled)",
      Completed: false,
      description: null
    },
    {
      id: 3,
      dateCreated: "Add date format here",
      title: "To do number 4 (pre-filled)",
      Completed: false,
      description: null
    }  
  ]
}

export default function reducerNewToDo(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_TO_DO_ITEM':
      return state.toDoArray.push(action.payload);
    default: return state;
  }
}