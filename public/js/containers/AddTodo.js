import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

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
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
        );
    }
}

const styles={
  container:{
        opacity:0,
        animation: "fadein ease 1s forwards",
        animationDelay: "2s"
    }
}

const AddTodo = connect()(AddToDo);


export default AddTodo;