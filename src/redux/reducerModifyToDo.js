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

export default function reducerModifyToDo(state = initialState, action) {
  switch(action.type) {
    //*** Change cases ***
    case 'EDIT_TO_DO_ITEM':
      return console.log('EDIT_TO_DO_ITEM');

    default: return state;
  }
}