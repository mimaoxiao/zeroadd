import React from 'react';

import "./Story1Scene3.css";
import Story1Scene3Item1 from './Item/Item1';

export default class Story1Scene3 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:[true,true,true,true,true,true],
            pos:0,
            max:0
        });
        [
            'Next','End'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    Next(){
        let paused=this.state.paused;
        paused[this.state.pos+1]=false;
        this.setState({
            pos:this.state.pos+1,
            paused:paused
        })
    }

    End(){
        if(this.state.pos===this.state.max){
            this.props.Next();
            return;
        }
    }

    componentDidMount(){
        let paused=this.state.paused;
        paused[this.state.pos]=false;
        this.setState({
            paused:paused
        })
    }

    render(){
        return (
            <Story1Scene3Item1 End={this.End} paused={this.state.paused[0]}>
            </Story1Scene3Item1>
        );
    }
}