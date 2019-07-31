import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDoItemList = (props) => {
    const { todos, onDelete } = props;
    const toDoList = todos.map(todo => (<ToDoItem key={todo.id} {...todo} onDelete={onDelete}/>));

    return (
        <div className="todo-item-list">
            { toDoList }
        </div>
    );
};

export default ToDoItemList;