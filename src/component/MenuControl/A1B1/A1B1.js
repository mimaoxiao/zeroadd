import styles from "./A1B1.css";
import React from 'react';

export default class A1B1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    meow(){
        alert("meow");
    }

    render(){
        return (
            <>
            <div onClick={this.props.change} next="A1">gotoA1</div>
            <div onClick={this.meow}>meow</div>
            </>
        );
    }
}