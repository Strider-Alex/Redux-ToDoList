import React from 'react'
import Particles from 'react-particles-js';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SVGTitle from './SVGTitle'
import particleParams from '../../settings/particles.json'

export default class App extends React.Component{
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
