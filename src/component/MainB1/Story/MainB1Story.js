import "./MainB1Story.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class MainB1Story extends React.Component{
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
            className="MainB1Story"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            onClick={this.onClick}
            >
                <TweenOne
                animation={
                { 
                    opacity:0,
                    yoyo:1,
                    duration:2000,
                    ease:"easeInSine",
                    repeat:-1
                }}
                className="MainB1StoryIcon"
                >
                <img src="book.png" alt=""/>
                </TweenOne>
                <div className="MainB1StoryContent">阅览主线剧情</div>
            </TweenOne>
        );
    }
}