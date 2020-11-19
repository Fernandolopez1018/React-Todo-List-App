import React from "react";
import Todo from "./Todo";


const TodoList = (props) => {
    const {tacos, fryChicken} = props;

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {tacos.map((Untaco) => (
                <Todo 
                    tacos={tacos} 
                    fryChicken={fryChicken} 
                    key={Untaco.id} 
                    textTaco={Untaco.text}
                    Untaco = {Untaco}
                />
            ))}
            </ul>
            
        </div>
    )
}

export default TodoList;