import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './components/store/index';
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
