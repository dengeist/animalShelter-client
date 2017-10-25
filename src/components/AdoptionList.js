import React from 'react';

export default function AdoptAPet(props) {
  const {catToAdopt, dogToAdopt} = props;
  const [ catKeys, dogKeys ] = [ Object.keys(catToAdopt), Object.keys(dogToAdopt)]

  const catList = catKeys.map(
    (prop, idx) => 
    <li data-prop={prop}>{catToAdopt[prop]}</li>
  );
  const dogList = dogKeys.map(
    (prop, idx) => 
    <li data-prop={prop}>{dogToAdopt[prop]}</li>
  );

  return (
    <div className="animals">
      <ul data-animal="cat">
        {catList}
      </ul>
      <ul data-animal="dog">
        {dogList}
      </ul>
    </div>
  );
}