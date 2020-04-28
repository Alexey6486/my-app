import React from "react";
import Header from "./header/Header";
import List from "./list/List";
import Footer from "./footer/Footer";
import styles from './style.module.css'

function Todolist() {
    return (
        <div className={styles.todolist}>
            <Header/>
            <List/>
            <Footer/>
        </div>
    );
}

export default Todolist;