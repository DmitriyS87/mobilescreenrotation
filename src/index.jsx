import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

const entryPoint = document.querySelector('.app');

window.addEventListener("load", () => { window.scrollTo(0, 0); });

const init = () => {
  ReactDOM.render(<App />, entryPoint);
};

init();
