import "./MainA1.css";
import RotatePhoto from './RotatePhoto/RotatePhoto';
import Title from './Title/Title';

import TweenOne from 'rc-tween-one';
import React from 'react';

export default class MainA1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            'onClick',    
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(event){
        this.props.Change(event.target.attributes[0].value,2);
    }

    render(){
        return (
            <div next="B1" onClick={this.onClick} className="MainA1Parent">
                <div className="MainA1Title"><Title/></div>
                <TweenOne
                animation={{ 
                    opacity:1,
                    yoyo: true,
                    repeat: -1,
                    duration: 1500,
                    ease:"easeInSine"
                }}
                style={{opacity:0}}
                className="MainA1Tip"
                >
                点击屏幕继续
                </TweenOne>
                <div className="MainA1Photo"><RotatePhoto/></div>
            </div>
        );
    }
}