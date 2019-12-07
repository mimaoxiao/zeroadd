import React from 'react';
import './Test.css';
import Animate from 'rc-animate';
import QueueAnim from 'rc-queue-anim';
export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show:true,
          switch:"ControlLeft",
          content:"meow"
          };
          [
            'start','stop','cp'
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    start(){
      this.setState({content:"meow",switch:"ControlLeft"});
    }
    stop(){
      this.setState({content:"dog",switch:"ControlRight"});
    }
    cp(){
      this.setState({content:"cp",switch:"ControlRight"});
    }
      render(){
        
        return (
          <div style={{margin:"100px"}}>
          <div onClick={this.start}>enter</div>
          <div onClick={this.stop}>enp</div>
          <div onClick={this.cp}>p</div>
          <QueueAnim
            duration={5000}
            appear={false}
            ease="easeInSine"
            className="Control"
            >
            {this.state.content==="meow"?<div key="meow" className="meow">meow</div>:null}
          {this.state.content==="dog"?<div key="dog" className="meow">dog</div>:null}
          {this.state.content==="cp"?<div key="cp" className="meow">cp</div>:null}
            </QueueAnim>  
          </div>
        );
      }
}