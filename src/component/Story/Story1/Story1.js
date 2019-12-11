import React from 'react';
import QueueAnim from 'rc-queue-anim';

import "./Story1.css";
import Story1Scene1 from './Scene/Scene1/Story1Scene1';
import Story1Scene2 from './Scene/Scene2/Story1Scene2';

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
            className="S1"
            animConfig={[{opacity:[1,0]},{opacity:[1,0]}]}
            >
            {this.state.pos===1?<Story1Scene1 Next={this.Next} key={1}/>:null}
            {this.state.pos===2?<Story1Scene2 Next={this.Next} key={2}/>:null}
            </QueueAnim>
        );
    }
}