import styles from "./MenuControl.css";
import React from 'react';
import A1 from "./A1/A1";
import A1B1 from "./A1B1/A1B1";

function MenuChoose(props) {
    return props.if ? props.children : null
}

export default class MenuControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            display:"A1"
        });
        this.MenuChange=this.MenuChange.bind(this);
    }

    MenuChange(event){
        console.log(event.target.attributes[0].value);
        this.setState({display:event.target.attributes[0].value});
    }

    render(){
        return (
        <div>
            <MenuChoose if={this.state.display==="A1"}><A1 change={this.MenuChange}/></MenuChoose>
            <MenuChoose if={this.state.display==="A1B1"}><A1B1 change={this.MenuChange}/></MenuChoose>
        </div>
        )
    }
}