import React from 'react';
import './App.css';
import { MiniDrawer } from './template/MiniDrawer.js';
import { BrowserRouter } from "react-router-dom";
import { Scenes, MenuItens } from './scenes';

function App() {  
  return (
    <BrowserRouter>
      <MiniDrawer itensMenu={MenuItens} appName="APP NAME" appStatus="Home Dashboard">      
        {Scenes}
      </MiniDrawer>
    </BrowserRouter>
  );
}

export default App;
