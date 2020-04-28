import React from 'react';
import Todolist from "./componets/todolist/Todolist";
import styles from "./app.module.css"

function App() {
    return (
        <div className={styles.app}>
            <Todolist/>
        </div>
    );
}

export default App;

