import React from 'react';

import "./Story1Scene3.css";
import Story1Scene3Item1 from './Item/Item1';
import Story1Scene3Item2 from './Item/Item2';
import Story1Scene3Item3 from './Item/Item3';
import Story1Scene3Item4 from './Item/Item4';
import Story1Scene3Item5 from './Item/Item5';
import Story1Scene3Item6 from './Item/Item6';
import Story1Scene3Item7 from './Item/Item7';
import Story1Scene3Item8 from './Item/Item8';

export default class Story1Scene3 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:[true,true,true,true,true,true,true,true],
            pos:0,
            max:8
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
            <Story1Scene3Item1 End={this.End} Next={this.Next} paused={this.state.paused[0]}>
                <Story1Scene3Item8 paused={this.state.paused[1]} Next={this.Next}/>
                <Story1Scene3Item2 paused={this.state.paused[2]} Next={this.Next}/>
                <Story1Scene3Item3 paused={this.state.paused[3]} Next={this.Next}/>
                <Story1Scene3Item4 paused={this.state.paused[4]} Next={this.Next}/>
                <Story1Scene3Item5 paused={this.state.paused[5]} Next={this.Next}/>
                <Story1Scene3Item6 paused={this.state.paused[6]} Next={this.Next}/>
                <Story1Scene3Item7 paused={this.state.paused[7]} Next={this.Next}/>
            </Story1Scene3Item1>
        );
    }
}