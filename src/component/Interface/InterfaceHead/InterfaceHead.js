import "./InterfaceHead.css";
import React from 'react';
import QueueAnim from 'rc-queue-anim';

export default class InterfaceA1 extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            List:[]
        });
        [].forEach((method)=>this[method] = this[method].bind(this));
    }

    componentDidUpdate(prevProps){
        if(this.props.Now!==prevProps.Now){
            let newList=[];
            for(let i=0;i<this.props.Now.length;i++)
            {
                switch(this.props.Now[i])
                {
                    case "A1":newList.push(<div className="InterfaceHeadIcon" key="A1"/>);break;
                    case "B1":newList.push(<div className="InterfaceHeadCell" key="B1">B1</div>);break;
                    case "C1":newList.push(<div className="InterfaceHeadCell" key="C1">C1</div>);break;
                    default:break;
                }
            }
            console.log(newList);
            this.setState({List:newList});
        }
    }

    render(){
        return (
            <div className="InterfaceHead">
                <QueueAnim className="InterfaceHeadQueueAnimate"
                duration="300"
                appear={false}
                animConfig={[
                { opacity: [1, 0], translateX: [0, 15] },
                { opacity: [1, 0], translateX: [0, 15] }
                ]}
                onEnd={this.MenuChangeEnd}>
                {this.state.List}
                </QueueAnim>
            </div>
        );
    }
}