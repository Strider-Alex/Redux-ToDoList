import React from 'react';
import FadeInOut from './FadeInOut';
import FilterLink from '../containers/FilterLink';


export default class Footer extends React.Component{
    render(){
        return(

        <FadeInOut duration={1000} delay={2200}>
            {state=>
            <div style={{...state,...styles.container}}>
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
            }
        </FadeInOut>
        );
    }
}

const styles={
    container:{
        width:500,
        margin:"15px auto",
        position: "relative"
    }
  }