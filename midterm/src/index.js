import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppF from './Task1';
import AppS from './Task2';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppF />, document.getElementById('root'));
registerServiceWorker();
