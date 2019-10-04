import "./InterfaceBody.css";
import React from 'react';
import QueueAnim from 'rc-queue-anim';

import InterfaceA1 from './InterfaceA1/InterfaceA1';
import InterfaceA1B1 from './InterfaceA1B1/InterfaceA1B1';

export default class InterfaceBody extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        let x;
        switch(this.props.Now)
        {
            case "A1":x=<InterfaceA1 key="A1"/>;break;
            case "":break;
            default:break;
        }
        return (
            <div className="InterfaceBody">
            <QueueAnim className="InterfaceBodyQueueAnimate"
            duration="300"
            appear={false}
            animConfig={[
            { opacity: [1, 0], translateX: [0, 50] },
            { opacity: [1, 0], translateX: [0, -50] }
            ]}>
            {x}
            </QueueAnim>
            </div>
        )
    }
}