import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component{
    render(){
       return(
            <li className={styles.item}>
                <input type="checkbox"
                 checked={this.props.todo.completed} 
                 className={styles.checkbox}
                 onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                 /> 
                 <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                 {this.props.todo.title}
            </li>
        )
    }
       
    }

export default TodoItem