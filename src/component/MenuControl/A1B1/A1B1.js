import "./A1B1.css";
import React from 'react';


export default class A1B1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    meow(){
        alert("meow");
    }

    render(){
        return (
            <div>
                <div className="MenuPath">章节选择</div>
                <div next="A1" className="MenuButton MenuBack" onClick={this.props.change}>返回</div>
                <div className="MenuButton MenuFolder" onClick={this.meow}>正文</div>
            </div>
        );
    }
}