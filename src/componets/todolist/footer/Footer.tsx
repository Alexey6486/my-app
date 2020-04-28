import React from "react";
import styles from './style.module.css'

function Footer() {
    return (
        <div className="todoList-footer">
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
        </div>
    );
}

export default Footer;