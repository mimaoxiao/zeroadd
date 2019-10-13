import "./Return.css";
import React from 'react';

export default class Return extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            'onClick'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(){
        this.props.Change(this.props.Next,this.props.Level);
    }

    render(){
        return (
            <div onClick={this.onClick} className="Return">
                
            </div>
        );
    }
}