import React from "react";
import "./index.css";
import InputToDo from "./InputToDo";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = { todos: [], todo: { text: "", key: "" }};

  addToDo = InputToDo => {
    //when a new to do is added
    const newToDo = InputToDo;
    if (newToDo.text !== "") {
      console.log(newToDo);
      const todos = [...this.state.todos, newToDo];
      this.setState({
        todos: todos,
        todo: { text: "", key: "" }
      });
    }
  };

  // refToDo = () => {
  //   //a reference to the current to do being added
  //   // console.log("Test Input");
  // };

  deleteEntry = key =>{
    const newToDosList = this.state.todos.filter(entry =>{
      return entry.key !== key
    })
    this.setState({todos: newToDosList})
  }

  render() {
    return (
      <div className="App">
        <InputToDo addToDo={this.addToDo} refToDo={this.refToDo} />
        <ToDoList todos={this.state.todos} deleteToDos={this.deleteEntry} />
      </div>
    );
  }
}
export default App;
