import "./InterfaceHead.css";
import React from 'react';

export default class InterfaceA1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [].forEach((method)=>this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="InterfaceHead">
                <div className="InterfaceHeadIcon"/>
            </div>
        );
    }
}