import React from 'react';
import { initialState, 
  reducer, 
  unsetEditTodo,
  editTodo,
  toggleComplete,
  deleteTodo,
  addTodo  } from './context.duck';
import Todos from './Todos';

function App() {
  const TodoContext = React.createContext();
  const [state, send] = React.useReducer(reducer, initialState);
  return (
    <TodoContext.Provider >
      <Todos state={state} send={send} actions={{ 
        unsetEditTodo,
        editTodo,
        toggleComplete,
        deleteTodo,
        addTodo 
    }}/>
    </TodoContext.Provider>
  );
}

export default App;
