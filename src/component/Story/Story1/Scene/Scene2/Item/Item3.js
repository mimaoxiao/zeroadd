import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene2Item3 extends React.Component{
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
            className="S1S2I3"
            style={{opacity:0}}
            paused={this.props.paused}
            >
            戴安娜悠哉的躺在床铺上，滑动着手机上面的新闻消息，<br/>
            总是有关于昨晚的行星撞地球，这些实在太腻了。
            </TweenOne>
        );
    }
}