import React from "react";

const Todo = (props) => {
    const {textTaco, fryChicken, tacos, Untaco} = props;
    //events
    const deleteHandler = () => {
        fryChicken(tacos.filter((el) => el.id !== Untaco.id));
        //console.log(Untaco);
    }

    const completeHandler = () => {
        fryChicken(tacos.map((pancakes) => {
            if(pancakes.id === Untaco.id){
                return {
                    ...pancakes, completed: !pancakes.completed
                }
                
            }
            return pancakes;
        })
    );
    }
    return (
        <div className="todo">
            <li className={`todo-item ${Untaco.completed ? "completed" : ""}`}>
                {textTaco} 
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i  className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i  className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;