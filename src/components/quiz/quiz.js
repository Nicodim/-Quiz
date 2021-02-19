import React from 'react';
import ReactDOM from 'react-dom'
import styles from './quiz.module.css';
import Pick_1 from './img/Pick_1.png';

const Quiz = ({q_content}) => {
    const elements = q_content.map((el)=> {
        return (
            <div key={el.id} className={styles.list_item}>
                <img src={el.img}></img>
                <a className={styles.item_link} >{el.content}</a>
            </div>
        )
    })
    return (
        <div className={styles.content_container}>
            <h2>ZDOROU</h2>
            <div className={styles.conent_wrapper}>
                        <div className={styles.list_item}>
                         <img src={Pick_1}></img>
                         <a className={styles.item_link} >«Жанна д’Арк становится главнокомандующей французскими войсками в Столетней войне и берет штурмом Орлеан. Жанна д’Арк становится главнокомандующей французскими войсками в Столетней войне и берет штурмом Орлеан»</a>
                        </div>
                    
                    <div className={styles.rest_items}>
                        {elements}
                    </div>
            </div>
        </div>
    )
}


export default Quiz;