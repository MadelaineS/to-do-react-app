import React from "react";

class InputToDo extends React.Component {
  state = { todo: { text: "", key: "" } };

  onInput = event => {
    //handle data on field change
    event.persist();
    const todoText = event.target.value;
    const todo = { text: todoText, key: Date.now() };
    this.setState({ todo });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state.todo);
  };

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="ui top attached block header">
            <label>To do</label>
          </div>
          <div className="ui bottom attached segment">
            <input
              type="text"
              placeholder="To do"
              ref={this.props.refToDo}
              value={this.state.todo.text}
              onChange={this.onInput}
              className="field"
            />
            <div className="add-btn">
              <button type="submit" className="ui primary button">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputToDo;
