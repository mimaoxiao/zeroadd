import "./A1Title.css";
import React from 'react';

export default class A1Title extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className="A1TitleParent">
                <div className="A1TitleTitle">零和</div>
                <div className="A1TitleAuthor">陆琴言</div>
            </div>
        );
    }
}