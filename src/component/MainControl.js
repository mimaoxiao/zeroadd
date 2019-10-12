import "./MainControl.css";
import MainA1 from './MainA1/MainA1';
 
import QueueAnim from 'rc-queue-anim';
import React from 'react';

export default class MainControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Display:"A1",
        });

        [
            'StatusChange'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    StatusChange(next){
        this.setState({Display:next});
    }

    render(){
        let content;
        switch(this.state.Display){
            case "A1":{
                content=<MainA1/>;break;
            }
            default:break;
        }
        return (
            <div class="MainControl">
                {content}
            </div>
        );
    }
}