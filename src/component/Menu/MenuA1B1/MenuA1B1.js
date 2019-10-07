import "./MenuA1B1.css";
import React from 'react';


export default class MenuA1B1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div>
                <div className="MenuPath">章节选择</div>
                <div Next="A1" className="MenuButton MenuBack" onClick={this.props.Change}>返回</div>
                <div Next="A1+B1+C1" className="MenuButton MenuFolder" onClick={this.props.Change}>正文</div>
            </div>
        );
    }
}