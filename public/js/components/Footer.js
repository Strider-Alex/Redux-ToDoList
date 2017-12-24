import React from 'react';
import FilterLink from '../containers/FilterLink';

export default class Footer extends React.Component{
    render(){
        return(
        <div style={styles.container}>
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink> 
        </div>
        );
    }
}

const styles={
    container:{
        width:500,
        margin:"15px auto",
        opacity:0,
        animation: "fadein ease 1s forwards",
        animationDelay: "3s"
    }
  }