import React from 'react'
import ReactDOM from 'react-dom'
import './end-game.css'

const EndGame = props => {
    return (
        <div className="popup_wrapper">
            <div className="popup_container">
           <h2 className="popup_title"><p>Игра завершена!</p><p>Вы набрали 120 очков за 22 раунда</p></h2>
            <div className="exit_btn" onClick={props.onClose}></div>
           <div>
               <div className="social_buttons">
               <h4>Поделитесь результатами</h4>
                   <button>В контакте</button>
                   <button>Фейсбук</button>
               </div>
               <div>
                   <div className="game_menu">
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