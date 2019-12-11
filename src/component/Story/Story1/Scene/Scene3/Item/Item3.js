import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene3Item3 extends React.Component{
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
                opacity:1,
                onComplete:this.props.Next
            }]}
            className="S1S3I3"
            onClick={this.props.End}
            style={{opacity:0}}
            paused={this.props.paused}
            >
            {this.props.children}
            </TweenOne>
        );
    }
}