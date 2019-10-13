import "./MainB1.css";
import React from 'react';
import Return from './Return/Return';

export default class MainB1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
        [
            
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className="MainB1Parent">
                <div className="MainB1Back">
                    <Return Change={this.props.Change} Next="A1" Level={1}/>
                </div>
                <div className="MainB1Story">
                    
                </div>
                <div className="MainB1Person">
                    
                </div>
                <div className="MainB1Event">
                    
                </div>
            </div>
        );
    }
}