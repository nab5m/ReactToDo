import React, {Component} from 'react';
import ToDoWrapper from "../components/ToDoWrapper";
import ToDoItemList from "../components/ToDoItemList";
import '../css/todo-container.css';
import ToDoForm from "../components/ToDoForm";
import CalendarToday from '@material-ui/icons/CalendarToday';

class ToDoContainer extends Component {
    static defaultProps = {
        todos: [],
    };

    render() {
        const { onSubmit, onDelete, todos } = this.props;

        return (
            <div className="todo-container">
                <ToDoWrapper>
                    <h1>오늘 할 일</h1>
                    <p>
                        <CalendarToday className="calendar-icon" />
                        2019-07-31
                    </p>

                    <ToDoForm onSubmit={onSubmit} />
                    <ToDoItemList todos={todos} onDelete={onDelete} />
                </ToDoWrapper>
            </div>
        );
    }
}

export default ToDoContainer