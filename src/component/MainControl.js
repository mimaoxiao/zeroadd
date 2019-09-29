import styles from "./MainControl.css";
import Interface from "./Interface/Interface";
import Title from "./Title/Title";
import MenuControl from "./MenuControl/MenuControl";
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
                <Title className={styles.title}/>
                <MenuControl className={styles.menu}/>
                <div className={styles.interface}>meow</div>
            </div>
        );
    }
}