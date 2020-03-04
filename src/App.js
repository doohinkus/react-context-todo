import React, {
  useState,
  useReducer,
  useContext,
  useEffect,
  useRef
} from 'react';

import Todos from './Todos';

function App() {
  // import Todos from './Todos';
const initialState = {
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
const TodoContext = React.createContext();



  return (
    <TodoContext.Provider value={initialState}>
      <Todos />
    </TodoContext.Provider>
  );
}

export default App;
