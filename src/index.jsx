import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const entryPoint = document.querySelector('.app');

const init = () => {
  ReactDOM.render(<App />, entryPoint);
};

init();
