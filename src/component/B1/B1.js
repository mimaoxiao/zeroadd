import "./B1.css";
import React from 'react';
import Return from './Return/Return';
import B1Title from './Title/B1Title';
import B1Story from './Story/B1Story';
import B1Person from './Person/B1Person';
import B1Event from './Event/B1Event';

export default class B1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="B1Parent">
                <div className="B1Back">
                    <Return Change={this.props.Change} Next="A1" Level={1}/>
                </div>
                <B1Title className="B1Title"/>
                <B1Story className="B1Story"/>
                <B1Event className="B1Event"/>
                <B1Person className="B1Person"/>
            </div>
        );
    }
}