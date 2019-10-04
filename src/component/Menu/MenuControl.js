import "./MenuControl.css";
import React from 'react';
import QueueAnim from 'rc-queue-anim';

import MenuA1 from "./MenuA1/MenuA1";
import MenuA1B1 from "./MenuA1B1/MenuA1B1";
import MenuA1B1C1 from "./MenuA1B1C1/MenuA1B1C1";

export default class MenuControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            'MenuChangeFirst','MenuChangeEnd'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    MenuChangeFirst(event){
        this.props.Change(event.target.attributes[0].value);
    }
    MenuChangeEnd(event){
        this.props.Change();
    }

    render(){
        let x;
        switch(this.props.Now)
        {
            case "A1":x=<MenuA1 key="A1" Change={this.MenuChangeFirst}/>;break;
            case "A1B1":x=<MenuA1B1 key="A1B1" Change={this.MenuChangeFirst}/>;break;
            case "A1B1C1":x=<MenuA1B1C1 key="A1B1C1" Change={this.MenuChangeFirst}/>;break;
            case "":break;
            default:break;
        }
        return (
            <div className="MenuControlMenu">
            <QueueAnim className="MenuQueueAnimate"
            duration="300"
            appear={false}
            animConfig={[
            { opacity: [1, 0], translateX: [0, 15] },
            { opacity: [1, 0], translateX: [0, -15] }
            ]}
            onEnd={this.MenuChangeEnd}>
            {x}
            </QueueAnim>
            </div>
        )
    }
}