import React from 'react';

function Whitescreen(props) {
  return (
    <div className={`whitescreen ${props.value}`}>
        <div className="menu-burger-button" onClick={props.open}>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
        </div>
        <p className="start-text">START</p>
    </div>
  );
}

export default Whitescreen;