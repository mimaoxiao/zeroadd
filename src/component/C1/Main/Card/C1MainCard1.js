import "./C1MainCard1.css";
import React from 'react';

export default class C1MainCard1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="C1MainCardParent">
                <div className="C1MainDay">
                    <div className="C1MainYear">2019年8月</div>
                    <div className="C1MainDate">32日</div>
                </div>
                <div className="C1MainTime">
                    <div className="C1MainClock">11:61</div>
                </div>
                <div className="C1MainContent">
                    猫很可爱，以上。
                </div>
            </div>
        );
    }
}