import React from 'react';
import './Test.css';
import Animate from 'rc-animate';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show:true
          };
          [
            'start','stop'
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    start(){
      this.setState({show:!this.state.show});
    }
    stop(){

    }
      render(){
        
        return (
          <div style={{margin:"100px"}}>
          <div onClick={this.start}>enter</div>
          <Animate
          transitionName="fade"
          className="up"
        >
          {this.state.show?<div className="meow">meow</div>:null}
        </Animate>
        <Animate
        className="down"
          transitionName="fade"
        >
          {!this.state.show?<div className="meow">meow</div>:null}
        </Animate>
          </div>
        );
      }
}