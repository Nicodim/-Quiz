import React, { useState } from 'react';
import './App.css';
import './components/btn-list'
import BtnList from './components/btn-list';
import EndGame from './components/end-game';
import Popup from './components/popup'

function App() {
    const botList = new Array(120).fill(0).map((e,i)=> e+i+1 );
// const [showPopup, setShowPopup] = useState(false);
// const [contentType, setContentType] = useState(false);

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
                {gameState.visible && 
                <Popup>
                    {!gameState.content && 
                    <BtnList onClose={hideGame} list={botList}/>
                    }
                    {gameState.content && 
                    <EndGame onClose={hideGame}/>
                    }
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