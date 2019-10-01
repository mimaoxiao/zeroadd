import "./A1.css";
import React from 'react';

export default class A1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div>
                <div next="A1B1" className="MenuButton" onClick={this.props.change}>开始阅读</div>
            </div>
        );
    }
}