import "./InterfaceControl.css";
import React from 'react';
import InterfaceHead from './InterfaceHead/InterfaceHead';
import InterfaceBody from './InterfaceBody/InterfaceBody';

export default class InterfaceControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className="InterfaceParent">
                <InterfaceHead className="InterfaceHead" Now={this.props.Now}/>
                <InterfaceBody className="InterfaceBody" Now={this.props.Now}/>
            </div>
        );
    }
}