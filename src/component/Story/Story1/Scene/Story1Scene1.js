import "./Story1Scene1.css";
import React from 'react';

import Story1Scene1Item1 from './Item/Item1';
import Story1Scene1Item2 from './Item/Item2';

export default class Story1Scene1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:[true,true],
            pos:0
        });
        [
            'Next'
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

    componentDidMount(){
        let paused=this.state.paused;
        paused[this.state.pos]=false;
        this.setState({
            paused:paused
        })
    }

    render(){
        return (
            <>
            <Story1Scene1Item1 paused={this.state.paused[0]} Next={this.Next}>
                <Story1Scene1Item2 paused={this.state.paused[1]} Next={this.Next}/>
            </Story1Scene1Item1>
            </>
        );
    }
}