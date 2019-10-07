import "./InterfaceA1B1.css";
import React from 'react';
import TweenOne from 'rc-tween-one';

export default class InterfaceLoading extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className="InterfaceLoading">
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:0,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:1700
                },]}
                repeat={-1}
                
                className="InterfaceLoadingL"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                L
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:200,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:1500
                },
                ]}
                repeat={-1}
                className="InterfaceLoadingo"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                o
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:400,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:1300
                },]}
                repeat={-1}
                
                className="InterfaceLoadinga"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                a
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:600,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:1100
                },]}
                repeat={-1}
                
                className="InterfaceLoadingd"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                d
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:800,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:900
                },]}
                repeat={-1}
                
                className="InterfaceLoadingi"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                i
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:1000,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:700
                },]}
                repeat={-1}
                
                className="InterfaceLoadingn"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                n
                </TweenOne>
                </div>
                <div className="InterfaceLoadingWord">
                <TweenOne
                animation={[{ 
                    delay:1200,
                    rotateY:0,
                    opacity:1,
                    duration: 2000,
                    ease:"easeInSine",
                },
                {
                    duration:1000
                },
                {
                    opacity:0,
                    duration: 500,
                    ease:"easeInSine",
                },
                {
                    duration:500
                },]}
                repeat={-1}
                
                className="InterfaceLoadingg"
                style={{opacity:'0',transform: 'rotateY(-90deg)'}}
                >
                g
                </TweenOne>
                </div>
            </div>
        );
    }
}