import "./Control.css";
import A1 from './A1/A1';
import B1 from './B1/B1';
 
import QueueAnim from 'rc-queue-anim';
import React from 'react';

export default class Control extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Display:"A1",
            Loading:"",
            Level:1,
            Change:['right', 'left'],
        });

        [
            'StatusChange'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    StatusChange(next,nextlevel){
        if(typeof nextlevel==="number"){
            if(nextlevel<=this.state.Level){
                this.setState({Change:['left', 'right']});
            }
        }
        if(this.state.Loading===""){
            if(typeof next!=="string"){
                this.setState({
                    Change:['right', 'left'],
                });
                return;
            }
            this.setState({
                Loading:next,
                Display:"",
                Level:nextlevel,
            });
        }
        else{
            let Loading=this.state.Loading;
            this.setState({
                Display:Loading,
                Loading:"",
            });
        }
    }

    render(){
        let content;
        switch(this.state.Display){
            case "A1":{
                content=<A1 key="A1" Change={this.StatusChange}/>;break;
            }
            case "B1":{
                content=<B1 key="B1" Change={this.StatusChange}/>;break;
            }
            default:break;
        }
        return (
                <QueueAnim
                duration={500}
                onEnd={this.StatusChange}
                appear={false}
                ease="easeInSine"
                className="Control"
                type={this.state.Change} 
                >
                {content}
                </QueueAnim>
                
        );
    }
}