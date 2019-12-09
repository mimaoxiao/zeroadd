import "./C1Main.css";
import C1MainCard1 from './Card/C1MainCard1';
import QueueAnim from 'rc-queue-anim';
import React from 'react';

export default class C1Main extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            
        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        let Aniconfig;
        console.log(this.props.pos);
        if(this.props.act==="prev")
        {
            Aniconfig=[{x:[0,200],opacity:[1,0]},{opacity:[1,0]}];
        }
        else if(this.props.act==="next")
        {
            Aniconfig=[{x:[0,-200],opacity:[1,0]},{opacity:[1,0]}];
        }
        return (
            <QueueAnim
            duration={500}
            appear={false}
            ease="easeInSine"
            className="C1Main"
            animConfig={Aniconfig}
            >
            {this.props.pos===1?<C1MainCard1 key={1}/>:null}
            {this.props.pos===2?<C1MainCard1 key={2}/>:null}
            {this.props.pos===3?<C1MainCard1 key={3}/>:null}
            {this.props.pos===4?<C1MainCard1 key={4}/>:null}
            {this.props.pos===5?<C1MainCard1 key={5}/>:null}
            </QueueAnim> 
        );
    }
}