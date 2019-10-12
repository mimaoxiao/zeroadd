import React from 'react';
import './Test.css';
import QueueAnim from 'rc-queue-anim';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            items: [
              <li key="0">0</li>,
              <li key="1">1</li>,
              <li key="2">2</li>
            ],
            change:['right', 'left']
          };
          ['onAdd','onRemove','onSwitch'].forEach((method)=>this[method] = this[method].bind(this));
    }
      onAdd() {
        let items = this.state.items;
        items.push(<li key={Date.now()}>{this.state.items.length}</li>);
        this.setState({
          show: true,
          items:items,
        });
      }
      onRemove(){
        let items = this.state.items;
        items.splice(items.length - 1, 1);
        this.setState({
          show: true,
          items:items,
        });
      }
      onSwitch(){
          if(this.state.change===['left', 'right']){
                this.setState({
                change:['right', 'left']
              });
          }
          else{
            this.setState({
                change:['left', 'right']
              });
          }
      }
      render(){
        return (
          <div className="queue-demo">
            <p className="buttons">
            <button onClick={this.onSwitch} style={{ marginLeft: 10 }}>S</button>
              <button onClick={this.onAdd} style={{ marginLeft: 10 }}>Add</button>
              <button onClick={this.onRemove} style={{ marginLeft: 10 }}>Remove</button>
            </p>
            <div className="demo-content">
              <div className="demo-tbody" key="b">
                <QueueAnim component="ul" type={this.state.change} leaveReverse>
                  {this.state.show ? this.state.items : null}
                </QueueAnim>
              </div>
            </div>
          </div>
        );
      }
}