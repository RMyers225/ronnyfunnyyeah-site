import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import './components/Toolbar/Toolbar.css';

function App() {
  return (
    <div className="App">
        <Toolbar />
        <main style={{marginTop: '64px'}}>
        <p>This is the page content!</p> 
        </main>
        
    </div>
    
  );
}

export default App;
