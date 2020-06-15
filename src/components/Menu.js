import React from 'react';

function Menu(props) {
  return (
    <div className="menu">
        <p className="username">Viktor</p>
        <ul className="links">
            <li className="start" onClick={props.close}>Start</li>
            <li>Your Cart</li>
            <li>Favourites</li>
            <li>Your Orders</li>
            <hr />
            <li>Sign Out</li>
        </ul>
    </div>
  );
}

export default Menu;