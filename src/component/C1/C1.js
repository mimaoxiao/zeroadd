import React from 'react';

import "./C1.css";
import C1Next from './Next/C1Next';
import C1Prev from './Prev/C1Prev';
import Return from './Return/Return';
import C1Main from './Main/C1Main';

export default class C1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            pos:1,
            act:"next",
            max:5,
        });
        [
            'Next','Prev'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    Next(){
        let pos=this.state.pos+1;
        if(pos>this.state.max)
        {
            pos=1;
        }
        this.setState({
            pos:pos,
        });
        if(this.state.act!=="next")
        {
            this.setState({act:"next"});
        }
    }

    Prev(){
        let pos=this.state.pos-1;
        if(pos<1)
        {
            pos=this.state.max;
        }
        this.setState({
            pos:pos,
        });
        if(this.state.act!=="prev")
        {
            this.setState({act:"prev"});
        }
    }

    render(){
        return (
            <div className="C1Parent">
                <Return className="C1Return" Change={this.props.Change} Next="B1" Level={2}/>
                <C1Next className="C1Next" click={this.Next}/>
                <C1Prev className="C1Prev" click={this.Prev}/>
                <C1Main className="C1Main" Change={this.props.Change} act={this.state.act} pos={this.state.pos}/>
            </div>
        );
    }
}