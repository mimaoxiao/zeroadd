import "./C1Main.css";
import C1MainCard1 from './Card/C1MainCard1';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';

export default class C1Main extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            paused:true,
            reverse:false,
        });
        [
            'MouseEnter','MouseLeave','MouseEnd'
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    MouseEnter(){
        this.setState({paused:false,reverse:false});
    }
    MouseLeave(){
        this.setState({paused:false,reverse:true});
    }
    MouseEnd(){
        this.setState({paused:true});
    }
    render(){
        let Aniconfig;
        if(this.props.act==="prev")
        {
            Aniconfig=[{x:[0,200],opacity:[1,0]},{opacity:[1,0]}];
        }
        else if(this.props.act==="next")
        {
            Aniconfig=[{x:[0,-200],opacity:[1,0]},{opacity:[1,0]}];
        }
        return (
            <TweenOne
            animation={
            { 
                backgroundColor: '#e8e8e8',
                duration: 200,
                onComplete:this.MouseEnd
            }}
            className="C1Main"
            paused={this.state.paused}
            reverse={this.state.reverse}
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
            >
                <QueueAnim
                duration={500}
                appear={false}
                ease="easeInSine"
                animConfig={Aniconfig}
                >
                {this.props.pos===1?<C1MainCard1 Change={this.props.Change} key={1}/>:null}
                {this.props.pos===2?<C1MainCard1 key={2}/>:null}
                {this.props.pos===3?<C1MainCard1 key={3}/>:null}
                {this.props.pos===4?<C1MainCard1 key={4}/>:null}
                {this.props.pos===5?<C1MainCard1 key={5}/>:null}
                </QueueAnim>
            </TweenOne>
        );
    }
}