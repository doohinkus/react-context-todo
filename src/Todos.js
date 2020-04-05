import React, {
  useRef,
  useEffect,
  useState
} from 'react';

export default function Todos({state, send, actions: { 
  unsetEditTodo,
  editTodo,
  toggleComplete,
  deleteTodo,
  addTodo 
}}){

  const inputRef = useRef(null);
  const [editValue, setEditValue] = useState(null);
  const [addValue, setAddValue] = useState("");
 
  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [state.isEditing])

  function handleEdit(todo){
    if(editValue){
      send(editTodo(todo, editValue));
    } 
    send(unsetEditTodo(todo))
    setEditValue("");
  }
  function handleAddTodo(todo){
    if(todo){
      send(addTodo(todo))
    }
    setAddValue("")
  }
  return (
    
      <div className="container mx-auto">
      
      <h1 className="text-center text-xl font-bold text-gray-600">
        {state.todos.length ? `${state.todos.length} Todos` : "No more todos."}
      </h1>
      <input 
        type="text"
        ref={inputRef}
        onChange={e => setAddValue(e.target.value)}
        value={addValue}
      />
      <button onClick={() => handleAddTodo(addValue)}>Add Todo</button>
      <ul className="block mx-auto">
        {state.todos.map(todo => <li key={todo.id} className="block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto text-center">
                   {todo.isEdit ?  (
                           <input
                              className="shadow appearance-none block border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center my-2 mx-auto content-center"
                              type="text"
                              ref={inputRef}
                              name={todo.id}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleEdit(todo)}
                              placeholder={todo.title}
                           />
                         ) : <h2
                               className="text-xl font-normal text-gray-700"
                               data-state={todo.isComplete ? "complete" : "incomplete"}>{todo.title}</h2>}
                         <button
                           className="bg-green-500 hover:bg-blue-700 text-white font-light px-2 rounded"
                           onClick={() => send(toggleComplete(todo))}>{todo.isComplete ? "Uncomplete" : "Complete"}</button>
            <button 
              className="bg-red-500 hover:bg-blue-700 text-white font-light px-2 rounded mx-1"
              onClick={() => send(deleteTodo(todo))}>Delete</button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-light px-2 rounded"
              onClick={() => send({type: "SET_EDIT_TODO", payload: todo})}>Edit</button>
                         
         
               </li>)}
      </ul>
      
      </div>
      
    
  )
  
}