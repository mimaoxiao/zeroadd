import React from 'react';

import "./C1MainCard2.css";

export default class C1MainCard2 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            'onClick'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(){
        this.props.Change("T1",4);
    }

    render(){
        return (
            <div onClick={this.onClick} className="C1MainCard2Parent">
                <div className="C1MainDay">
                    <div className="C1MainYear">2294年11月</div>
                    <div className="C1MainDate">22日</div>
                </div>
                <div className="C1MainTime">
                    <div className="C1MainClock">07:35</div>
                </div>
                <div className="C1MainContent">
                    猫很可爱，以上。
                </div>
            </div>
        );
    }
}