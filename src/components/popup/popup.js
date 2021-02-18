import React from 'react'
import ReactDOM from 'react-dom'
import styles from './popup.module.css'

const Popup = (props) => {
    return (
        <div className={styles.popup}>
            <div className={styles.exit_btn} onClick={props.onClose}></div>
            {props.children}
        </div>
    )
}

export default Popup;