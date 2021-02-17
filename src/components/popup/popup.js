import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'

const Popup = (props) => {
    return (
        <div className="popup_wrapper">
            {props.children}
        </div>
    )
}

export default Popup;