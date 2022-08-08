import React from "react"
import TodoItem from "./TodoItem"


class TodoList extends React.Component{
    render(){
        return(
          <ul>
            {this.props.todos.map(todo =>(
            <TodoItem key={todo.id}
             todo={todo}
             handleChange={this.props.handleChange}
              />
            ))}
          </ul>
        )
    }
}
export default TodoList