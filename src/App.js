import React, {Component, Fragment} from 'react';
import ToDoContainer from "./containers/ToDoContainer";
import './css/app.css';

class App extends Component {
    id = 2;
    state = {
        todos: [
            {id: 0, title: '빨래하기'},
            {id: 1, title: '청소하기'},
        ],
    };

    handleCreate = (data) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.concat({
                id: this.id++,
                ...data,
            }),
        });
    };
    handleDelete = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(item => item.id !== id),
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const input = document.getElementById("add-item");

        this.handleCreate({title: input.value});
        input.value = '';
    };

    render() {
        const {todos} = this.state;
        const {handleSubmit, handleDelete} = this;

        return(
            <Fragment>
                <ToDoContainer onDelete={handleDelete} onSubmit={handleSubmit} todos={todos} />
            </Fragment>
        );
    }

}

export default App;