import React from 'react';

import "./A1Title.css";

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