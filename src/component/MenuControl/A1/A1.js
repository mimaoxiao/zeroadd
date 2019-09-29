import styles from "./A1.css";
import React from 'react';

export default class A1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <>
            <div onClick={this.props.change} next="A1B1">A1desu</div>
            </>
        );
    }
}