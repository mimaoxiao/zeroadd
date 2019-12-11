import React from 'react';

import "./Story1Scene2.css";
import Story1Scene2Item1 from './Item/Item1';
import Story1Scene2Item2 from './Item/Item2';
import Story1Scene2Item3 from './Item/Item3';
import Story1Scene2Item4 from './Item/Item4';
import Story1Scene2Item5 from './Item/Item5';
import Story1Scene2Item6 from './Item/Item6';

export default class Story1Scene2 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:[true,true,true,true,true,true],
            pos:0,
            max:6
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
            <Story1Scene2Item1 End={this.End} paused={this.state.paused[0]} Next={this.Next}>
                <Story1Scene2Item2 paused={this.state.paused[1]} Next={this.Next}/>
                <Story1Scene2Item3 paused={this.state.paused[2]} Next={this.Next}/>
                <Story1Scene2Item4 paused={this.state.paused[3]} Next={this.Next}/>
                <Story1Scene2Item5 paused={this.state.paused[4]} Next={this.Next}/>
                <Story1Scene2Item6 paused={this.state.paused[5]} Next={this.Next}/>
            </Story1Scene2Item1>
        );
    }
}