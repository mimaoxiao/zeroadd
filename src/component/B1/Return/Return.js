import "./Return.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Return extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:true,
            reverse:false,
        });
        [
            'onClick','MouseEnter','MouseLeave','MouseEnd'
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
    onClick(){
        this.props.Change(this.props.Next,this.props.Level);
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
            className="Return"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            onClick={this.onClick}
            />
        );
    }
}