import CheckIcon from '@material-ui/icons/Check'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import classes from "./TodoItem.module.css"
import {useState} from "react"


const TodoItem = props => {
  const [notComplete, setComplete] = useState(true)

  let checkIcon = {
    color: "rgb(0, 189, 3)",
    backgroundColor: "white",
    borderRadius: "0px 0px 0px 15px",
  }

  let deleteIcon = {
    color: "red",
    backgroundColor: "white",
    borderRadius: "0px 15px 0px 0px",
  }

  
  let todoItem = [classes.TodoItem];
  
  if (props.complete) {
    todoItem.push(classes.completeTodo)
  } 

  function onCompleteHandler() {
    setComplete(prev => !prev);
    props.onComplete(props.todoIndex, notComplete)
  }

  return (
    <div className={todoItem.join(" ")}>
      <IconButton style={checkIcon} onClick={onCompleteHandler}>
        <CheckIcon style={{fontSize: "27px"}}/>
      </IconButton>

      <p className={classes.todoText}>{props.todo}</p>

      <IconButton style={deleteIcon} onClick={() => props.onDelete(props.todoIndex)}>
        <DeleteIcon style={{fontSize: "27px"}}/>
      </IconButton>
    </div>
  )
}

export default TodoItem;