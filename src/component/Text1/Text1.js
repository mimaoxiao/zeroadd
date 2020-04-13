import React from 'react';

import "./Text1.css";
import Return from './Return/Return';
import Text from './Text/Text';

export default class Text1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            pos:1,
            act:"next",
            max:5,
        });
    }

    render(){
        return (
            <div className="Text1Parent">
                <Return className="Text1Return" Change={this.props.Change} Next="C1" Level={3}/>
                <div className="Text">
                    <Text/>
                </div>
            </div>
        );
    }
}