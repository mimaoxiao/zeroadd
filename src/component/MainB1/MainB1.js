import "./MainB1.css";
import React from 'react';
import Return from './Return/Return';
import MainB1Title from './Title/MainB1Title';
import MainB1Story from './Story/MainB1Story';
import MainB1Person from './Person/MainB1Person';
import MainB1Event from './Event/MainB1Event';

export default class MainB1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="MainB1Parent">
                <div className="MainB1Back">
                    <Return Change={this.props.Change} Next="A1" Level={1}/>
                </div>
                <MainB1Title className="MainB1Title"/>
                <MainB1Story className="MainB1Story"/>
                <MainB1Event className="MainB1Event"/>
                <MainB1Person className="MainB1Person"/>
            </div>
        );
    }
}