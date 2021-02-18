import React from 'react'
import ReactDOM from 'react-dom'
import styles from './end-game.module.css'
import VK_btn from './img/vk_btn.svg'
import Face_btn from './img/face_btn.svg'
const EndGame = props => {
    return (
        <div className={styles.popup_wrapper}>
            <div className={styles.popup_container}>
           <h2 className={styles.popup_title}><p>Игра завершена!</p><p>Вы набрали 120 очков за 22 раунда</p></h2>
           <div>
               <div className={styles.social_buttons}>
               <h4>Поделитесь результатами</h4>
                   <div className={styles.social_wrapper}>
                   <a href="#"><img src={VK_btn}></img></a>
                   <a href="#"><img src={Face_btn}></img></a>
                   </div>
               </div>
               <div>
                   <div className={styles.game_menu}>
                       <a>Играть снова</a>
                       <a>На главную</a>
                       <a>Рейтинг</a>
                   </div>
               </div>
           </div>
           </div>
        </div>
    )
}

export default EndGame;