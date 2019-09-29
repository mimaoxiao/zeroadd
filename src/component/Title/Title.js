import styles from "./Title.css";
import React from 'react';

export default class Title extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        });
    }

    render(){
        return (
            <div className={styles.parent}>
                <div className={styles.title}>零和</div>
                <div className={styles.author}>陆琴言</div>
            </div>
        );
    }
}