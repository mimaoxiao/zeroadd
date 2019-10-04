import "./MenuA1.css";
import React from 'react';

export default class MenuA1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div>
                <div Next="A1B1" className="MenuButton" onClick={this.props.Change}>开始阅读</div>
            </div>
        );
    }
}