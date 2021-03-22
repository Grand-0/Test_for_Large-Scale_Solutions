import React from "react";
import styles from "./Header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.icon} src={require("../../images/mountain-icon-png.png")}/>
            <h2 className={styles.mainInscrition}>This progect was create for Large-Scale Solutions</h2>
        </div>
    );
}