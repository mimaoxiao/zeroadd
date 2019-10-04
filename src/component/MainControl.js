import "./MainControl.css";
import InterfaceControl from "./Interface/InterfaceControl";
import Title from "./Title/Title";
import MenuControl from "./Menu/MenuControl";
import React from 'react';

export default class MainControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Display:"A1",
            Loading:"",
        });

        [
            'StatusChange'
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    StatusChange(next){
        if(this.state.Loading===""){
            if(next===undefined)//第三次切换多余 将其无效
            {
                return;
            }
            this.setState({//第一次切换撤下原有元素
                Display:"",
                Loading:next,
            });
        }
        else{
            let loading=this.state.Loading;//第二次切换换上新元素
            this.setState({
                Display:loading,
                Loading:"",
            });
        }
    }

    render(){
        return (
            <div className="MainControlParent">
                <div className="MainControlTitle"><Title/></div>
                <div className="MainControlMenu"><MenuControl Change={this.StatusChange} Now={this.state.Display}/></div>
                <div className="MainControlInterface"><InterfaceControl Now={this.state.Display}/></div>
            </div>
        );
    }
}