import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene1Item2 extends React.Component{
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
                opacity:1
            }]}
            className="E1S1I2"
            style={{opacity:0}}
            paused={this.props.paused}
            >
            2294年10月22日。
            清晨，能见度低下。
            </TweenOne>
        );
    }
}