import QueueAnim from 'rc-queue-anim';
import React from 'react';

import "./Control.css";
import A1 from './A1/A1';
import B1 from './B1/B1';
import C1 from './C1/C1';
import Story1 from './Story/Story1/Story1';
import Text1 from './Text1/Text1';

export default class Control extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Display:"A1",
            Level:1,
            Aniconfig:[{x:[0,document.body.clientWidth]},{x:[0,-document.body.clientWidth]}],
        });
        
        [
            'StatusChange'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    StatusChange(next,nextlevel){
        if(nextlevel<=this.state.Level){
            this.setState({
                Aniconfig:[{x:[0,-document.body.clientWidth]},{x:[0,document.body.clientWidth]}]
            });
        }
        else{
            this.setState({
                Aniconfig:[{x:[0,document.body.clientWidth]},{x:[0,-document.body.clientWidth]}]
            });
        }
        this.setState({
            Display:next,
            Level:nextlevel,
        });
    }

    render(){
        return (
            <QueueAnim
            duration={300}
            appear={false}
            ease="easeInSine"
            className="Control"
            animConfig={this.state.Aniconfig}
            >
            {this.state.Display==="A1"?<A1 key="A1" Change={this.StatusChange}/>:null}
            {this.state.Display==="B1"?<B1 key="B1" Change={this.StatusChange}/>:null}
            {this.state.Display==="C1"?<C1 key="C1" Change={this.StatusChange}/>:null}
            {this.state.Display==="S1"?<Story1 key="S1" Change={this.StatusChange}/>:null}
            {this.state.Display==="T1"?<Text1 key="T1" Change={this.StatusChange}/>:null}
            </QueueAnim>    
        );
    }
}