import React from 'react';

import "./B1Title.css";

export default class B1Title extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="B1Title">
                选择要阅览的部分
            </div>
        );
    }
}