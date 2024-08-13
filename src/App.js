import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  useEffect(() => {

    var timeTrans = 3000;
    var el = document.getElementById("AppHeader");

    window.onload = function() {
      el.style.animation = "App-header-load";
      el.style.animationDuration = timeTrans + "ms";
      el.style.marginLeft = "1%";
    }

    setTimeout(() => {
      el.style.animation = "App-header-fade";
      el.style.animationDuration = timeTrans + "ms";
    }, timeTrans);

    setTimeout(() => {
      el.style.display = "none";
    }, timeTrans*2);
    
  }, []);

  return (
    <div className="App">
      <header className="App-header" id="AppHeader">
        <h3>
          Welcome to Lewlu home page!
        </h3>
      </header>
      <ul id="output"></ul>
    </div>
  );
}

export default App;
