import {useState} from "react"
import {Button, Snackbar} from "@material-ui/core"
import classes from "./AddTodo.module.css"

const AddTodo = props => {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(true)

  function onSubmitBtn() {
    if (value.trim() != "") {
      setInvalid(true);
      props.onAdd(value);
      setValue("");
    } else {
      setInvalid(false);
    }
  }

  let borderRadiusInput = {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "15px"
  }

  let ButtonStyles = {
    height: "35px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "0px",
    color: "white",
    backgroundColor: "#0085ad"
  }

  let vertical = 'top';
  let horizontal = 'center';

  return (
  <div className={classes.AddTodo}>
      <Snackbar
        style={{color: "red"}}
        anchorOrigin={{vertical,horizontal}}
        open={!invalid}
        message="Введите название задачи"
      />
    <input 
      style={borderRadiusInput} 
      placeholder="Todo" 
      className={classes.input}
      onChange={event => setValue(event.target.value)}
      value={value}
    />
    <Button
      onClick={onSubmitBtn} 
      style={ButtonStyles} 
      size="small" 
      variant="contained"
    >Добавить
    </Button>
  </div>
  )
}

export default AddTodo