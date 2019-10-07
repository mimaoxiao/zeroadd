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
        let Now=this.props.Now;
        let StringList=Now.split('+');
        console.log(StringList);
        return (
            <div className="InterfaceParent">
                <InterfaceHead className="InterfaceHead" Now={StringList}/>
                <InterfaceBody className="InterfaceBody"/>
            </div>
        );
    }
}