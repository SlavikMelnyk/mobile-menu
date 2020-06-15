import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Whitescreen from './components/Whitescreen';

function App() {

  const [opened, setOpened] = useState('');

  const open = () => { setOpened('opened') };
  const close = () => { setOpened('closed') };

  return (
    <div className="App">
      <Menu close={close} />
      <Whitescreen value={opened} open={open} />
    </div>
  );
}

export default App;
