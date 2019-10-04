import "./InterfaceA1B1.css";
import React from 'react';
import QueueAnim from 'rc-queue-anim';

export default class InterfaceA1B1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        let x=[];
        let Add=this.props.Add;
        for(let i=0;i<Add;i++)
        {
            switch(Add[i])
            {
                case"C1":x.push(<div key="A1B1C1" className="InterfaceA1B1Cell">meow</div>);break;
                default:break;
            }
        }
        return (
            <div className="InterfaceA1B1">
                <div className="InterfaceA1B1Icon"></div>
                <QueueAnim className="InterfaceA1B1Animate"
                duration="300"
                appear={false}
                animConfig={[
                { opacity: [1, 0], translateX: [0, 15] },
                { opacity: [1, 0], translateX: [0, -15] }
                ]}
                onEnd={this.MenuChangeEnd}>
                {x}
                </QueueAnim>
            </div>
        );
    }
}