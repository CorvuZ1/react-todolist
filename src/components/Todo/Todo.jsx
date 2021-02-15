import {useState, useEffect} from "react"
import AddTodo from "./AddTodo/AddTodo"
import classes from "./Todo.module.css"
import TodoItem from "./TodoItem/TodoItem"

const Todo = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    localDataCheck()
   },[])

  useEffect(() => {
    localDataSave()
  },[todos])
 
  function localDataCheck() {
    let todosData = JSON.parse(localStorage.getItem("todos"));
    if (todosData) {
      setTodos(todosData)
    }
  }

   function localDataSave() {
     localStorage.setItem("todos", JSON.stringify(todos));
   }
  
  function onAdd(todo) {
    setTodos(prev => [
      ...prev,
      {todo}
    ])
  }

  function onDelete(index) {
    let newTodos = todos.slice(0);
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className={classes.Todo}>
      <AddTodo onAdd={onAdd}/>
        {
          todos.map((todo, index) => 
            <TodoItem 
              key={index} 
              todoIndex={index}
              todo={todo.todo}
              onDelete={onDelete}
            />
          )
        }
    </div>
  )
}

export default Todo