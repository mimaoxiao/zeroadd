import "./C1.css";
import C1Next from './Next/C1Next';
import C1Prev from './Prev/C1Prev';
import Return from './Return/Return';
import React from 'react';

export default class C1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="C1Parent">
                <Return className="C1Return" Change={this.props.Change} Next="B1" Level={2}/>
                <C1Next className="C1Next"/>
                <C1Prev className="C1Prev"/>
            </div>
        );
    }
}