import "./A1RotatePhoto.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class A1RotatePhoto extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            now:1
        });
        ['ChangePicture'].forEach((method)=>this[method] = this[method].bind(this));
    }

    ChangePicture(){
        let now=this.state.now+1;
        if(now===5)
        {
            now=1;
        }
        this.setState({now:now});
    }

    render(){
        let Meow=String(this.state.now)+".png";
        let PicPath={backgroundImage:`url(${Meow})`};
        let ChangeMethod=this.ChangePicture;
        return (
            <TweenOne
            animation={{ 
                rotateY: -90,
                yoyo:true,
                repeat: -1, // demo 演示需要
                duration: 4000,
                onRepeat:ChangeMethod
            }}
            style={{transform:'rotateY(90deg)',height:'80vmin',width:'60vmin',alignSelf:'center',justifySelf:'center'}}
            >
            <div className="A1RotatePhoto" style={PicPath}/>
            </TweenOne>
        );
    }
}