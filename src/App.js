import React, { useState } from 'react';
import './App.css';
import './components/btn-list'
import BtnList from './components/btn-list';
import EndGame from './components/end-game';
import Popup from './components/popup'
import Quiz from './components/quiz';
import Pick_1 from './components/quiz/img/Pick_1.png';
import Pick_2 from './components/quiz/img/Pick_2.png';
import Pick_3 from './components/quiz/img/Pick_3.png';
import Pick_4 from './components/quiz/img/Pick_4.png';

function App() {
const q_content = [
    {img:Pick_1, content: '«Жанна д’Арк становится главнокомандующей французскими войсками', id: 2, },
    {img:Pick_2, content: 'Жанна д’Арк становится главнокомандующей французскими войсками ', id: 3, },
    {img:Pick_3, content: 'Жанна д’Арк становится главнокомандующей французскими войсками ', id: 4, },
    {img:Pick_4, content: 'Жанна д’Арк становится главнокомандующей французскими войсками ', id: 5, }
]
const botListTest = new Array(121);
    const types = ["special", "current", "passed", "special_passed", null];
    for (let i = 1; i < botListTest.length; i++) {
        botListTest[i] = {value: i, type: types[Math.round(Math.random() * 5)], id: i}
    }

    const [gameState, setGameState] = useState({
        visible: false,
        content: false
    })

    const hideGame = () => {
        const copy = {...gameState};
        copy.visible = false;
        setGameState(copy);
    };

    const showGame = (content) => {
        const copy = {...gameState};
        copy.visible = true;
        copy.content = content;
        setGameState(copy);
    };

    return (
        <div className='App'>
            {/* <div className={"content_wrapper"+(gameState.visible ? " blur" : "")}>
                 <button onClick={()=>showGame(false)}>Privet</button>
                <button onClick={()=>showGame(true)}>End Game</button>
            </div>
                {gameState.visible && <Popup onClose={hideGame}>
                    {!gameState.content && <BtnList list={botListTest}/>}
                    {gameState.content && <EndGame/>}
                </Popup>} */}

                <Quiz q_content={q_content} />
        </div>
    );



// const [showPopup, setShowPopup] = useState(false);
// const [contentType, setContentType] = useState(false);
    // return (
    //     <div className='App'>
    //              <button onClick={()=>{
    //                  setShowPopup(true);
    //                  setContentType(false);
    //              }}>Privet</button>
    //              <button onClick={()=>{
    //                  setShowPopup(true);
    //                  setContentType(true);
    //              }}>End Game</button>
    //              {showPopup && 
    //              <Popup>
    //                  {!contentType && < BtnList onClose={()=>setShowPopup(false)} list ={ botList }/>}
    //                  {contentType && <EndGame onClose={()=>setShowPopup(false)}/>}
    //             </Popup>}
    //              {/* <Popup>  */}
    //              {/* {ShowPopup && < BtnList onClose={()=>SetShowPopup(false)} list ={ botList }/>}
    //              {ShowPopup && < EndGame onClose={()=>SetShowPopup(false)}/>} */}
    //             {/* </Popup>  */}
    //     </div>
    // );
}

export default App;