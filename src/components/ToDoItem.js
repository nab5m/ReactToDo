import React from 'react';
import {DeleteForever, Done} from "@material-ui/icons";
import '../css/animation.css';

const ToDoItem = (props) => {
    return (
        <div className="todo-item">
            <Done className='icon icon-purple' onClick={
                (e) => {
                    e.preventDefault();

                    let checked = e.target;
                    if(checked.tagName === "path") {
                        checked = e.target.parentElement;
                    }

                    checked.classList.toggle("icon-purple");
                    checked.classList.toggle("icon-whitesmoke");
                }
            }/>
            <p>{props.title}</p>
            <DeleteForever className='icon delete-icon' color="secondary" onClick={
                (e) => {
                    let todoItem = null;
                    let animationTime = window.innerWidth > 768 ? 900 : 800;

                    if(e.target.tagName === "path") {
                        todoItem = e.target.parentElement.parentElement;
                    } else {    // svg
                        todoItem = e.target.parentElement;
                    }

                    todoItem.classList.toggle("animated");
                    todoItem.classList.toggle("fadeOutLeft");
                    setTimeout(() => { props.onDelete(props.id); }, animationTime);
                }
            } />
        </div>
    );
};

ToDoItem.defaultProps = {
    title: '타이틀을 입력하세요!'
};

export default ToDoItem;