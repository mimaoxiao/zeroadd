import React from 'react';
import QueueAnim from 'rc-queue-anim';

import "./Event1.css";
import Event1Scene1 from './Scene/Event1Scene1';

export default class Event1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            pos:1
        });
        [
            'Next'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    Next(){
        this.setState({pos:this.state.pos+1})
    }

    render(){
        return (
            <QueueAnim
            duration={500}
            appear={false}
            ease="easeInSine"
            className="E1"
            animConfig={[{opacity:[1,0]},{opacity:[1,0]}]}
            >
            {this.state.pos===1?<Event1Scene1/>:null}
            </QueueAnim>
        );
    }
}