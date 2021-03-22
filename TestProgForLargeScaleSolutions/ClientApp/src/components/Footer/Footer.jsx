import React from "react";
import styles from "./Footer.module.css";

export default function Footer(props){
    return(
        <div className={styles.footer}>
            <img className={styles.endImage} src={require("../../images/ade5280032e91455765d7d400df4741e-lotus-flower-icon-lotus-icons-by-vexels.png")}/>
        </div>
    );
}