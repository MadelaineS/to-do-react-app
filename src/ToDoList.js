import React from "react";

const ToDoList = props => {
  const todoEntries = props.todos.map(entry => {
    return (
      <div
        className="ui list container todos"
        key={entry.key}
        onClick={() => this.props.deleteToDos(entry.key)}
      >
        <div className="item">
          <i className="star icon"><div class="todo">{entry.text}</div></i>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="results-txt">Showing: {todoEntries.length} todos</div>
      <div>{todoEntries}</div>
    </div>
  );
};

export default ToDoList;
