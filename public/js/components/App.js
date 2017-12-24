import React from 'react'
import Particles from 'react-particles-js';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SVGTitle from './SVGTitle'
import particleParams from '../../settings/particles.json'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.keyframes = [
            `@keyframes dash {
                to {
                    stroke-dashoffset: 0;
                }
            }`,
            `@keyframes fadein {
                from { opacity: 0; }
                to   { opacity: 1; }
            }`,
            `@keyframes fillfadein {
                from { fill-opacity: 0; }
                to   { fill-opacity: 1; }
            }`,
        ];
    }
    componentWillMount(){
        let styleSheet=document.styleSheets[0];
        for(let rule of this.keyframes){
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }
        console.log(particleParams);
    }
    render(){
        return(
        <div>
            <Particles style={styles.particles} params={particleParams}/>
            <SVGTitle/>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
        );
    }
}

const styles = {
    particles:{
        position:"fixed",
        backgroundColor:"#faf2f3",
        margin:0
    }
};
