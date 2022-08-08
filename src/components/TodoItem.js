import React from "react";

class TodoItem extends React.Component{
    render(){
       return(
            <li>
                <input type="checked"/> {this.props.todo.title}
            </li>
        )
    }
       
    }

export default TodoItem