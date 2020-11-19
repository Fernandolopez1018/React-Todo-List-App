import React, { useState }from "react"

const Form = (props) => {
    //state
    const [inputText, setInputText] = useState("");
    //JS code and functions
    const { chicken, fryChicken} = props;
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        fryChicken([
            ...chicken, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    }
    return (
    <form onSubmit={submitTodoHandler}>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" required/>
        <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
        </button>
        
    </form>
    );
}

export default Form;