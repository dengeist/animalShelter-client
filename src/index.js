import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AdoptAPet from './components/AdoptionList';

import registerServiceWorker from './registerServiceWorker';

const catToAdopt = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  name: "Fluffy",
  gender: 'Female',
  age: "2 yrs",
  breed: "Bengal",
  story: "thrown on the street"
};
const dogToAdopt = {
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  name: 'June',
  gender: 'Female',
  age: '1 yrs',
  breed: 'Shiba',
  story: 'Rejected by mother'
}

ReactDOM.render(<AdoptAPet catToAdopt={catToAdopt} dogToAdopt={dogToAdopt} />, document.getElementById('root'));
registerServiceWorker();
