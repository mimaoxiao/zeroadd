import "./MenuControl.css";
import React from 'react';
import A1 from "./A1/A1";
import A1B1 from "./A1B1/A1B1";
import QueueAnim from 'rc-queue-anim';

export default class MenuControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            display:"A1",
            loading:""
        });
        [
            'MenuChangeFirst','MenuChangeEnd'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    MenuChangeFirst(event){
        this.setState({
            display:"",
            loading:event.target.attributes[0].value
        });
    }
    MenuChangeEnd(event){
        if(this.state.loading!=="")
        {
            let loading=this.state.loading;
            this.setState({
                display:loading,
                loading:""
            });
        }
    }

    render(){
        let x;
        switch(this.state.display)
        {
            case "A1":x=<A1 key="A1" change={this.MenuChangeFirst}/>;break;
            case "A1B1":x=<A1B1 key="A1B1" change={this.MenuChangeFirst}/>;break;
            case "":break;
            default:break;
        }
        return (
            <div className="MenuControlMenu">
            <QueueAnim className="Animate"
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
        )
    }
}