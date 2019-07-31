import React from 'react';

const ToDoWrapper = (props) => {
    const { children } = props;

    return (
        <div className="todo-wrapper">
            {children}
        </div>
    );
};

export default ToDoWrapper;