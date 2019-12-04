import React from 'react';
import './Test.css';
import TweenOne from 'rc-tween-one';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          paused:true,
          reverse:false,
          };
          [
            'enter','leave','end'
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    enter(){
      this.setState({paused:false,reverse:false});
    }
    leave(){
      this.setState({paused:false,reverse:true});
    }
    end(){
      this.setState({paused:true});
    }
      render(){
        let complete=this.end;
        return (
    <TweenOne
      animation={
      { 
        backgroundColor: '#e8e8e8',
        duration: 200,
        onComplete:complete
      }}
      className="test"
      paused={this.state.paused}
      reverse={this.state.reverse}
      onMouseEnter={this.enter}
      onMouseLeave={this.leave}
    >喵喵喵</TweenOne>
        );
      }
}