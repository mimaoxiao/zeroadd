import styles from "./MainControl.css";
import React from 'react';

export default class MainControl extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className={styles.parent}>
            <div className={styles.div1}>喵喵</div>
            <div className={styles.div2}>meow</div>
            <div className={styles.div3}>meow</div>
            </div>
        );
    }
}