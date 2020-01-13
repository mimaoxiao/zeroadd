import React from 'react';
import TweenOne from 'rc-tween-one';

export default class Story1Scene3Item4 extends React.Component{
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
            className="S1S3I4"
            onClick={this.props.End}
            style={{opacity:0}}
            paused={this.props.paused}
            >
            回想起自己早些年不懂事背着他姐姐、和西蒙出去私奔。
            </TweenOne>
        );
    }
}