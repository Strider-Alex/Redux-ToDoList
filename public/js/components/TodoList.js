import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 * Presentational Component
 */
export default class TodoList extends React.Component {
    render() {
        return(
        <ul>
            {this.props.todos.map((todo,id)=>(
                <Todo key={id} {...todo} onClick={()=>this.props.onTodoClick(id)} />
            ))}
        </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
}