import "./MainB1Person.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class MainB1Person extends React.Component{
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
            className="MainB1Person"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            onClick={this.onClick}
            >
                <TweenOne
                animation={[
                { 
                    opacity:1,
                    x:20,
                    duration:250,
                    ease:"easeInSine",
                },{
                    duration:1000
                },{
                    opacity:0,
                    x:40,
                    duration:250,
                    ease:"easeInSine",
                },{
                    duration:250
                }
                ]}
                className="MainB1PersonIcon"
                repeat={-1}
                style={{opacity:0}}
                >
                <img src="person.png" alt=""/>
                </TweenOne>
                <div className="MainB1PersonContent">阅览相关背景资料</div>
            </TweenOne>
        );
    }
}