export function addNewToDoItem(newToDo) {
  return {
    type: 'ADD_NEW_TO_DO_ITEM',
    payload: newToDo
  };
}

export function editToDoItem() {
  return {
    type: 'EDIT_TO_DO_ITEM'
  };
}
