import "./RotatePhoto.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class RotatePhoto extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            now:1,
            switchtime:true
        });
        ['ChangePicture'].forEach((method)=>this[method] = this[method].bind(this));
    }

    ChangePicture(){
        if(this.state.switchtime)
        {
            let now=this.state.now+1;
            if(now===5)
            {
                now=1;
            }
            this.setState({now:now,switchtime:false});
        }
        else{
            this.setState({switchtime:true});
        }
    }

    render(){
        let Meow=String(this.state.now)+".png";
        let PicPath={backgroundImage:`url(${Meow})`};
        let ChangeMethod=this.ChangePicture;
        return (
            <TweenOne
            animation={{ 
                rotateY: 90,
                yoyo:true,
                repeat: -1, // demo 演示需要
                duration: 2000,
                onRepeat:ChangeMethod
            }}
            style={{height:'80vmin',width:'60vmin',alignSelf:'center',justifySelf:'center'}}
            >
            <div className="InterfaceA1Main" style={PicPath}/>
            </TweenOne>
        );
    }
}