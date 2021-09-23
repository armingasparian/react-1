import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

function List() {

  const [todos, setTodos] = useState([
    { id: Math.random(), text: "Lear JS", isCompleted: false },
    { id: Math.random(), text: "Lear CSS", isCompleted: false },
    { id: Math.random(), text: "Lear React", isCompleted: false },    
  ]);

  return (
    <div className = "List">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false,
          }
        ]);
      }}/>
      <TodoList 
            todos={todos} 
            onChange={(newTodo) => {
              setTodos(todos.map((todo) => {
                if(todos.id === newTodo.id) {
                  return newTodo;
                }
                return todo;
              }));
            }}
            onDelete={(todo) => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }}/>
    </div>
  )
}

export default List; 