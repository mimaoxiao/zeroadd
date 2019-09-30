import "./Title.css";
import React from 'react';

export default class Title extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className="TitleParent">
                <div className="TitleTitle">零和</div>
                <div className="TitleAuthor">陆琴言</div>
            </div>
        );
    }
}