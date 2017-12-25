import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import CheckBox from './CheckBox';
import FadeInOut from './FadeInOut';

/**
 * Presentational Component
 */
@Radium
export default class Todo extends React.Component {
    render() {
        return (
        <FadeInOut delay={0} duration={500}>
        {state=>
        <div 
            key={`div-opacity-${state.opacity}`}
            onClick={this.props.onClick}
            style={{
                ...state,
                ...styles.list,
                textDecoration: this.props.completed?'line-through':'none',
            }}
        >
            <CheckBox checked={this.props.completed} duration={400} checkBoxStyle={{
                size:20,
                checkedColor:"#34b93d",
                unCheckedColor:"#b8b8b8"
            }}/>
            <span>{this.props.text}</span>
        </div>
        }
        </FadeInOut>
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
        padding:10,
        ":hover":{
            backgroundColor:"#f7f7f7"
        }
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}