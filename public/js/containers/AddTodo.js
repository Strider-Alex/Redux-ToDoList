import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

@Radium
class AddToDo extends React.Component{
    render(){
        let input;
        return(
        <div style={styles.container}>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    this.props.dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input
                    style={styles.input}
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit" style={styles.inputButton}>
                    Add Todo
                </button>
            </form>
        </div>
        );
    }
}

const styles={
    container:{
        margin:"60px auto 0px auto",
        width:500,
        opacity:0,
        animation: "fadein ease 1s forwards",
        animationDelay: "2s"
    },
    input:{
        width: "70%",
        padding: "13px 20px",
        margin: "4px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px 0px 0px 4px",
        boxSizing: "border-box"
    },
    inputButton:{
        width: "30%",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "14px 20px",
        margin: "4px 0",
        border: "none",
        borderRadius: "0px 4px 4px 0px",
        cursor: "pointer",
        ":hover":{
            backgroundColor:"#45a049"
        }
    }
}

const AddTodo = connect()(AddToDo);


export default AddTodo;