import React, { useState } from 'react';
import './App.css';
import './components/btn-list'
import BtnList from './components/btn-list';
import EndGame from './components/end-game';
import Popup from './components/popup'

function App() {
// const [showPopup, setShowPopup] = useState(false);
// const [contentType, setContentType] = useState(false);
const botListTest = new Array(121);
    const types = ["special", "current", "passed", "special_passed", null];
    for (let i = 1; i < botListTest.length; i++) {
        botListTest[i] = {value: i, type: types[Math.round(Math.random() * 5)]}
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
                <button onClick={()=>showGame(false)}>Privet</button>
                <button onClick={()=>showGame(true)}>End Game</button>
                {gameState.visible && <Popup onClose={hideGame}>
                    {!gameState.content && <BtnList list={botListTest}/>}
                    {gameState.content && <EndGame/>}
                </Popup>}
        </div>
    );

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