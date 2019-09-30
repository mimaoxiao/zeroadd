import "./MainControl.css";
import Interface from "./Interface/Interface";
import Title from "./Title/Title";
import MenuControl from "./MenuControl/MenuControl";
import React from 'react';

export default class MainControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className="MainControlParent">
                <Title className="MainControlTitle"/>
                <div className="MainControlMenu"><MenuControl/></div>
                <div className="MainControlInterface">meow</div>
            </div>
        );
    }
}