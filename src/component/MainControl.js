import "./MainControl.css";
import MainA1 from './MainA1/MainA1';
import MainB1 from './MainB1/MainB1';
 
import QueueAnim from 'rc-queue-anim';
import React from 'react';

export default class MainControl extends React.Component{
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
                content=<MainA1 key="A1" Change={this.StatusChange}/>;break;
            }
            case "B1":{
                content=<MainB1 key="B1" Change={this.StatusChange}/>;break;
            }
            default:break;
        }
        return (
                <QueueAnim
                duration={500}
                onEnd={this.StatusChange}
                appear={false}
                ease="easeInSine"
                className="MainControl"
                type={this.state.Change} 
                >
                {content}
                </QueueAnim>
                
        );
    }
}