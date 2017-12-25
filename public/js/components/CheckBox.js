import React from 'react';
import { Animate } from 'react-move';
import { easeQuadIn } from 'd3-ease';
import PropTypes from 'prop-types';


export default class CheckBox extends React.Component {
    GetCheckBoxStyle(){
        return {
            height: this.props.checkBoxStyle.size,
            width: this.props.checkBoxStyle.size,
            backgroundColor: "transparent",
            border: `${this.props.checkBoxStyle.size* 0.1} solid ${this.props.checkBoxStyle.unCheckedColor}`,
            borderRadius: "5px",
            borderStyle: "solid",
            borderWidth: this.props.checkBoxStyle.size*0.1,
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            cursor:"pointer"
        }
    }
    GetAnimateStyle(){
        if(this.props.checked)
            return {
                borderColor: this.props.checkBoxStyle.checkedColor,
                beforeHeight: this.props.checkBoxStyle.size*1.2,
                afterHeight: this.props.checkBoxStyle.size*0.5,
            }
        else
            return {
                borderColor: this.props.checkBoxStyle.unCheckedColor,
                beforeHeight: 0,
                afterHeight: 0
            }

    }
    GetBeforeStyle(){
        return {
            boxSizing: "border-box",
            position: "absolute",
            width: this.props.checkBoxStyle.size * 0.2,
            backgroundColor: this.props.checkBoxStyle.checkedColor,
            display: "inline-block",
            transformOrigin: "left top",
            borderRadius: "5px",
            top:this.props.checkBoxStyle.size * 0.72,
            left: this.props.checkBoxStyle.size * 0.41,
            //boxShadow: `0 0 0 ${this.props.checkBoxStyle.size * 0.05} ${this.props.checkBoxStyle.backgroundColor}`,
            transform: "rotate(-135deg)"
        }
    }
    GetAfterStyle(){
        return {
            boxSizing: "border-box",
            position: "absolute",
            width: this.props.checkBoxStyle.size * 0.2,
            backgroundColor: this.props.checkBoxStyle.checkedColor,
            display: "inline-block",
            transformOrigin: "left top",
            borderRadius: "5px",
            top:this.props.checkBoxStyle.size * 0.37,
            left: this.props.checkBoxStyle.size * 0.05,
            transform: "rotate(-45deg)"
        }
    }
    render() {
        return (
            <Animate
                start={this.GetAnimateStyle()}
                update={()=>{
                    let style = this.GetAnimateStyle();
                    if(this.props.checked){
                        return [
                            {
                                borderColor:[style.borderColor],
                                timing:{
                                    ease: easeQuadIn,
                                    duration: this.props.duration/2
                                }
                            },
                            {
                                beforeHeight:[style.beforeHeight],
                                timing:{
                                    ease: easeQuadIn,
                                    duration: this.props.duration/2,
                                    delay: this.props.duration/2
                                }
                            },
                            {
                                afterHeight:[style.afterHeight],
                                timing:{
                                    ease: easeQuadIn,
                                    duration: this.props.duration/2
                                }
                            }
                        ]
                    }
                    else{
                        return [
                            {
                                borderColor:[style.borderColor],
                                timing:{
                                    ease: easeQuadIn,
                                    duration: this.props.duration/2
                                }
                            },
                            {
                                beforeHeight:[style.beforeHeight],
                                afterHeight:[style.afterHeight],
                                timing:{
                                    duration:0
                                }
                            }
                        ]
                    }
                }}
            >
            {state=>
            <label style={{...this.GetCheckBoxStyle(),borderColor:state.borderColor}}>
                <div style={{...this.GetBeforeStyle(),height:state.beforeHeight}}></div>
                <div style={{...this.GetAfterStyle(),height:state.afterHeight}}></div>
            </label>
            }
            </Animate>
        );
    }
}


CheckBox.PropTypes={
    checked: PropTypes.bool.isRequired,
    checkBoxStyle: PropTypes.shape({
        size:PropTypes.number.isRequired,
        unCheckedColor:PropTypes.string.isRequired,
        checkedColor:PropTypes.string.isRequired
    }),
    duration: PropTypes.number.isRequired
}
