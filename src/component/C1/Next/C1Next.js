import React from 'react';
import TweenOne from 'rc-tween-one';

import "./C1Next.css";

export default class C1Right extends React.Component{
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
            className="C1Next"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            onClick={this.props.click}
            />
        );
    }
}