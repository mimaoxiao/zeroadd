import React from 'react';
import './Test.css';
import Animate from 'rc-animate';

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }

export default class Test extends React.Component{
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
      showD:false
    };
    [
      'onClick','onDlick'
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  
  onClick(){
    this.setState({
      show: !this.state.show,
    });
  }
  onDlick(){
    this.setState({
      showD: !this.state.showD,
    });
  }
  
  render(){
    return (
      <div className="code-box-demo-wrapper">
        <p className="buttons">
          <button type="primary" onClick={this.onClick}>Switch</button>
        </p>
        <Animate
          component=""
          transitionName="fade"
          onEnd={this.onDlick}
        >
          {
            this.state.show ? 
              <div key="1" className="code-box-shape" >S</div> : null}
        </Animate>
        <Animate
          component=""
          transitionName="fadeD"       
        >
              {
            this.state.showD ? 
              <div key="2" className="code-box-shape" >D</div> : null}
        </Animate>
      </div>
    );
  }
}