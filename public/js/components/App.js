import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SVGTitle from './SVGTitle'

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
        for(let rule of this.keyframes)
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
    render(){
        return(
        <div style={styles.container}>
            <SVGTitle/>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
        );
    }
}

const styles = {
    container:{
        marginHorizontal:"20%"
    }
};
