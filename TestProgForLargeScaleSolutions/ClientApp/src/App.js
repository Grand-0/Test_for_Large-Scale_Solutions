import React from "react";
import styles from "./App.module.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
    return(
        <div className={styles.form}>
            <Header/>
            <Form/>
            <Footer/>
        </div>
    )
};

export default App;