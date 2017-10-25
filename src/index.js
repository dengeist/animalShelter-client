import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AdoptAPet from './components/AdoptionList';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AdoptAPet catToAdopt={catToAdopt} dogToAdopt={dogToAdopt} />, document.getElementById('root'));
registerServiceWorker();
