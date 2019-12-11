import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene1Item1 extends React.Component{
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
            className="E1S1I1"
            style={{opacity:0}}
            paused={this.props.paused}
            >
            {this.props.children}
            </TweenOne>
        );
    }
}