import React from "react"
import Header from "./Header";
import TodoList from "./TodoList";

class TodoContainer extends React.Component{
    state = {
 todos: [
   {
     id: 1,
     title: "Setup development environment",
     completed: true
   },
   {
     id: 2,
     title: "Develop website and add content",
     completed: false
   },
   {
     id: 3,
     title: "Deploy to live server",
     completed: false
   }
 ]
};
handleChange = id =>{
  this.setState(prevState =>({
    todos: this.state.todos.map(todo => {
      if(todo.id === id){
        return { 
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    }),
  }))
}
    render(){
        return(
            <div>
                <Header />
                <TodoList todos={this.state.todos} handleChange={this.handleChange} />
            </div>
        )
    }
}
export default TodoContainer