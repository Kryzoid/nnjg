import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'antd/dist/antd.css';

const mount = document.querySelector('[data-mount]');

// TODO: set up prerendering at some point
if (mount.hasChildNodes()) {
  ReactDOM.hydrate(<App />, mount);
} else {
  ReactDOM.render(<App />, mount);
}
