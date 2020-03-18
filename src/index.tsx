import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './page/Demo';
import './styles/global/index.scss'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));

serviceWorker.unregister();
