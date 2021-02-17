import React from 'react'
import ReactDOM from 'react-dom'
import styles from './btn-list.module.css';
// import './btn-list.css'

const BtnList = ({list, onClose}) => {
    const elements = list.map((el)=> {
        return (
            <div className={styles.list_item}>
                <a className={styles.item_link}>  {el} </a>
            </div>
        )
    })
    return (
        <div className={styles.btm_list}>
            <div className= {styles.title_container}>
            <h2 className={styles.quiz_title}>Список вопросов:</h2>
            <div className={styles.exit_btn} onClick={onClose}>
            </div>
            </div>
            <div className={styles.list_wrapper}>
            { elements }
            </div>
        </div>
    )
}

export default BtnList;