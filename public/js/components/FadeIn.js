import React from 'react'
import { Animate } from 'react-move'
import { easeQuadIn } from 'd3-ease'
import PropTypes from 'prop-types'

export default class FadeIn extends React.Component{
    render(){
        return(
        <Animate
            start={{opacity:0}}
            enter={{opacity:[1],timing:{duration:this.props.duration,delay:this.props.delay,ease:easeQuadIn}}}
        >
        {this.props.children}
        </Animate>
        );
    }
}

FadeIn.PropTypes={
    children: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired,
    delay:PropTypes.number.isRequired
}

