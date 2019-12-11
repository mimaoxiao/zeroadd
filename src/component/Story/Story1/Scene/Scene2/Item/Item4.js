import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene2Item4 extends React.Component{
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
            className="S1S2I4"
            style={{opacity:0}}
            paused={this.props.paused}
            >
            在这灰白极简的性冷淡风格装修的房间里，还是这安妮最了解自己。<br/>
            戴安娜一想到这，就把自己睡床上另外一个主人抱了起来。
            </TweenOne>
        );
    }
}