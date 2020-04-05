import React from 'react';
import { initialState } from './context.duck';
import Todos from './Todos';

function App() {
  const TodoContext = React.createContext();
  return (
    <TodoContext.Provider value={initialState}>
      <Todos />
    </TodoContext.Provider>
  );
}

export default App;
