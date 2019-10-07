import "./MainControl.css";
import InterfaceControl from "./Interface/InterfaceControl";
import Title from "./Title/Title";
import MenuControl from "./Menu/MenuControl";
import React from 'react';

export default class MainControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Display:"A1",
        });

        [
            'StatusChange'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    StatusChange(next){
        this.setState({Display:next});
    }

    render(){
        return (
            <div className="MainControlParent">
                <div className="MainControlTitle"><Title/></div>
                <div className="MainControlMenu"><MenuControl Change={this.StatusChange} Now={this.state.Display}/></div>
                <div className="MainControlInterface"><InterfaceControl Now={this.state.Display}/></div>
            </div>
        );
    }
}