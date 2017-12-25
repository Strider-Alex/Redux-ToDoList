import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

/**
 * Presentational Component
 */
@Radium
export default class Link extends React.Component{
    
    render(){
        return(
        <button
            href=""
            onClick={e=>{
                e.preventDefault()
                this.props.onClick()
            }}
            style={Object.assign({},styles.activeButton,!this.props.active&&styles.inactiveButton)}
        >
            {this.props.children}
        </button>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const styles = {
    activeButton:{
        width:"33.33%",
        backgroundColor: "#46a5b9",
        color: "white",
        padding: "3px 10px",
        margin: "8px 0",
        cursor: "pointer",
        border:"none",
        ":hover":{
            backgroundColor:"#46a5b9"
        }
    },
    inactiveButton:{
        backgroundColor:"grey",
        ":hover":{
            backgroundColor:"#b8b8b8"
        }
    }
}