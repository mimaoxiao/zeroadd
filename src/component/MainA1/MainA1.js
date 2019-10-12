import "./MainA1.css";
import RotatePhoto from './RotatePhoto/RotatePhoto';
import Title from './Title/Title';

import React from 'react';

export default class MainA1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="MainA1Parent">
                <div className="MainA1Title"><Title/></div>
                <div className="MainA1Tip">喵</div>
                <div className="MainA1Photo"><RotatePhoto/></div>
            </div>
        );
    }
}