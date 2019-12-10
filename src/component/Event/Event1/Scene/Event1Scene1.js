import "./Event1Scene1.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Event1Scene1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:[true,true],
            pos:1
        });
        [
            'Next'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    Next(){
        let paused=this.state.paused;
        paused[this.state.pos-1]=false;
        this.setState({
            pos:this.state.pos+1,
            paused:paused
        })
    }

    componentDidMount(){
        this.Next();
    }

    render(){
        return (
            <TweenOne
            animation={
            [{ 
                opacity:0
            },{
                delay:1000,
                opacity:1,
                onComplete:this.Next
            }]}
            className="E1S1Parent"
            style={{opacity:0}}
            paused={this.state.paused[0]}
            >
                <TweenOne
                animation={
                [{ 
                    opacity:0
                },{
                    delay:1000,
                    opacity:1
                }]}
                className="E1S1Word"
                style={{opacity:0}}
                paused={this.state.paused[1]}
                >
                2294年10月22日。
                清晨，能见度低下。
                </TweenOne>
            </TweenOne>
        );
    }
}