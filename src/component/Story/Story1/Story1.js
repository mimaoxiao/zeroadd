import React from 'react';
import QueueAnim from 'rc-queue-anim';

import "./Story1.css";
import Story1Scene1 from './Scene/Story1Scene1';

export default class Story1 extends React.Component{
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
            {this.state.pos===1?<Story1Scene1/>:null}
            </QueueAnim>
        );
    }
}