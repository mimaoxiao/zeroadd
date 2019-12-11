import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene2Item6 extends React.Component{
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
                delay:500,
                duration:500,
                opacity:1,
                onComplete:this.props.Next
            }]}
            className="S1S2I6"
            style={{opacity:0}}
            paused={this.props.paused}
            >
            这只漂亮的白猫蓝眼布偶猫，总是能为自己无聊的日常生活添些乐趣。
            </TweenOne>
        );
    }
}