import React from 'react';
import TextField from "@material-ui/core/TextField";

const ToDoForm = ({onSubmit}) => {
    return (
        <form className="todo-form" onSubmit={(e)=> onSubmit(e)} autoComplete="off">
            <TextField
                id="add-item"
                label="task"
                helperText="오늘 뭐하니?"
                fullWidth
            />
        </form>
    );
};

export default ToDoForm;