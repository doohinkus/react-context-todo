

// default state
export const initialState = {
  todos: [
    {
      id: 0,
      title: "Write todo app",
      isComplete: false,
      isEdit: false
    },
    {
      id: 1,
      title: "Great American Novel",
      isComplete: false,
      isEdit: false
      
    },
    {
      id: 2,
      title: "Artistic Painting",
      isComplete: false,
      isEdit: false
      
    }
  ],
  isEditing: false
}

// reducer
export function reducer(state, action){
  switch(action.type){
    case ("TOGGLE_IS_COMPLETE"):
      const toggledTodos = state
        .todos
        .map(currentTodo => currentTodo.id === action.payload 
             ? { ...currentTodo, isComplete: !currentTodo.isComplete} 
             : currentTodo);
      return {
             ...state,
             todos: toggledTodos
          }
      break;
    case ("SET_EDIT_TODO"):
      const setEditTodos = state
        .todos
        .map(currentTodo => currentTodo.id === action.payload.id
             ? { ...currentTodo, isEdit: true } 
             : currentTodo);
      return {
             ...state,
             todos: setEditTodos,
             isEditing: true
          }
      break;
    case ("UNSET_EDIT_TODO"):
        const unsetEditTodos = state
        .todos
        .map(currentTodo => currentTodo.id === action.payload.id
             ? { ...currentTodo, isEdit: false } 
             : currentTodo);
      return {
             ...state,
             todos: unsetEditTodos,
             isEditing: false
          }
      break;
     case ("EDIT_TODO"):
      console.log(action.payload, state.todos);
     const editedTodos =  state
        .todos
        .map(currentTodo => currentTodo.id === action.payload.todo.id
           ? { ...currentTodo, title: action.payload.editValue} 
           : currentTodo);
      return {
             ...state,
             todos: editedTodos
          }
      break;
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          
          {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: action.payload,
            isComplete: false,
            isEdit: false
          },
          ...state.todos,
        ]
      }
    break;  
    case ("DELETE_TODO"):
      const fewerTodos = state
        .todos
        .filter(currentTodo => currentTodo.id !== action.payload);
      return {
        ...state,
        todos: fewerTodos
      }
      break;
    default:
      return initialState;
  }
}

// action creators

export function unsetEditTodo(todo){
  return { 
    type: "UNSET_EDIT_TODO", 
    payload: todo
  };
}

export function editTodo(todo, editValue){
  return {
    type: "EDIT_TODO", 
    payload: { todo, editValue }
  }
}

export function toggleComplete(todo){
  return {
    type: "TOGGLE_IS_COMPLETE", 
    payload: todo.id
  }
}

export function deleteTodo(todo){
  return {
    type: "DELETE_TODO", 
    payload: todo.id
  }
}

export function addTodo(todo){
  return {
    type: "ADD_TODO",
    payload: todo
  }
}