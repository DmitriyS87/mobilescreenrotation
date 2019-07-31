import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

const entryPoint = window.document.querySelector(".app");

const init = () => {
  ReactDOM.render(<App />, entryPoint);
};

init();
