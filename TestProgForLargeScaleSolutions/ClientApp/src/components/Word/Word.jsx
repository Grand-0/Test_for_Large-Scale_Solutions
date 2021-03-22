import React from "react";
import styles from "./Word.module.css"

export default function Word(props){
    return(
        <h6 className={styles.context}>{props.context}</h6>
    );
}