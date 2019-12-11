import React from 'react';
import TweenOne from 'rc-tween-one';

import "./B1Event.css";

export default class B1Event extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:true,
            reverse:false,
        });
        [
            'MouseEnter','MouseLeave','MouseEnd'
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    MouseEnter(){
        this.setState({paused:false,reverse:false});
    }
    MouseLeave(){
        this.setState({paused:false,reverse:true});
    }
    MouseEnd(){
        this.setState({paused:true});
    }
    render(){
        return (
            <TweenOne
            animation={
            { 
                backgroundColor: '#e8e8e8',
                duration: 200,
                onComplete:this.MouseEnd
            }}
            className="B1Event"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            onClick={this.onClick}
            >
                <TweenOne
                animation={
                { 
                    rotate:720,
                    duration:2000,
                    ease:"easeInOutQuart",
                    repeat:-1
                }}
                className="B1EventIcon"
                >
                <img src="B1Music.png" alt=""/>
                </TweenOne>
                <div className="B1EventContent">阅览支线剧情</div>
            </TweenOne>
        );
    }
}