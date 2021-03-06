import React, { Component } from 'react';


class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            text: '', 
            todos: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.textUpdate = this.textUpdate.bind(this)
    }
    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked,
            text: '',
            todos : [...this.state.todos, this.state.text],
        })
    };

    textUpdate(event) {
        this.setState({
            text: event.target.value
        })
    };

    clearText = (index) => {
        const erase = this.state.todos.splice(index,1)
        this.setState({
          erase
    });
    };

render() {
    return (
        <div>
            <button onClick={this.handleClick}>Click Me</button>
            <input value={this.state.text} onChange={this.textUpdate}></input>
            <ul>
                {this.state.todos.map((todo, index) => {
                    return <li key={index}>{this.state.todos[index]}<button onClick={this.clearText.bind(this, index)}>Clear</button></li>
                })}
            </ul>


        </div>
        )
    }
}

export default TodoApp;