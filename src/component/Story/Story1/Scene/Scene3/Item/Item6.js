import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene3Item6 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <TweenOne
            animation={
            [{ 
                opacity:0
            },{
                duration:500,
                delay:500,
                opacity:1,
                onComplete:this.props.Next
            }]}
            className="S1S3I6"
            onClick={this.props.End}
            style={{opacity:0}}
            paused={this.props.paused}
            >
            但是幸好也在那个机械事故中自己找到了人生第一份可以让自己开心的工作——机械维修人员。
            </TweenOne>
        );
    }
}