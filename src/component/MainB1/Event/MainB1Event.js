import "./MainB1Event.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class MainB1Event extends React.Component{
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
            className="MainB1Event"
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
                className="MainB1EventIcon"
                >
                <img src="music.png" alt=""/>
                </TweenOne>
                <div className="MainB1EventContent">阅览主线剧情</div>
            </TweenOne>
        );
    }
}