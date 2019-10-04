import React from 'react';
import './Test.css';
import TweenOne from 'rc-tween-one';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [].forEach((method)=>this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="doge">
            <TweenOne
            animation={{ 
                rotateY: 360,
                repeat: -1, // demo 演示需要
                duration: 100000,
            }}
            className="meow"
            >

            <div className="peach" style={{transform:'rotateY(0deg) translateZ(100px)'}}/>
            </TweenOne>
            <TweenOne
            animation={{ 
                rotateY: -360,
                repeat: -1, // demo 演示需要
                duration: 100000,
            }}
            className="meow"
            >
            <div className="peach" style={{transform:'rotateY(120deg) translateZ(100px)'}}/>
            </TweenOne>
            </div>
        );
    }
}