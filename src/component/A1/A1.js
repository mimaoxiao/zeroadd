import TweenOne from 'rc-tween-one';
import React from 'react';

import "./A1.css";
import A1RotatePhoto from './RotatePhoto/A1RotatePhoto';
import Title from './Title/A1Title';

export default class A1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            'onClick',    
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(event){
        this.props.Change("B1",2);
    }

    render(){
        return (
            <div onClick={this.onClick} className="A1Parent">
                <div className="A1Title"><Title/></div>
                <TweenOne
                animation={{ 
                    opacity:1,
                    yoyo: true,
                    repeat: -1,
                    duration: 1500,
                    ease:"easeInSine"
                }}
                style={{opacity:0}}
                className="A1Tip"
                >
                点击屏幕继续
                </TweenOne>
                <div className="A1Photo"><A1RotatePhoto/></div>
            </div>
        );
    }
}