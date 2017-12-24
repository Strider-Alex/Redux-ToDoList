import React from 'react';
import PropTypes from 'prop-types';

/**
 * Presentational Component
 */
export default class Todo extends React.Component {
    render() {
        return (
        <div 
            onClick={this.props.onClick}
            style={{
                ...styles.list,
                textDecoration: this.props.completed?'line-through':'none',
            }}
        >
            {this.props.text}
        </div>
        );
    }
}

const styles={
    list:{
        position:"relative",
        backgroundColor:"white",
        border:"1px solid #ccc",
        borderRadius:"4px",
        margin:"-1px 0",
        padding:10
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}