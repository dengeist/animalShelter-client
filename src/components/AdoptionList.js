import React from 'react';
import { connect } from 'react-redux';

export function AdoptAPet(props) {
  const { catToAdopt, dogToAdopt } = props;
  const [catKeys, dogKeys] = [Object.keys(catToAdopt), Object.keys(dogToAdopt)];
  const [catList, dogList] = [
    catKeys.map(generateHTML, catToAdopt),
    dogKeys.map(generateHTML, dogToAdopt)
  ];

  function generateHTML(prop, idx) {
    const keyHash = prop + '-' + idx;

    let itemElem = (
      <li data-prop={prop} key={keyHash}>
        {this[prop]}
      </li>
    );
    if (prop === 'imageURL') {
      itemElem = (
        <li data-prop="image" key={keyHash}>
          <img src={this[prop]} alt=""/>
        </li>
      );
    }
    return itemElem;
  }

  return (
    <div className="animals">
      <ul data-animal="cat">{catList}</ul>
      <ul data-animal="dog">{dogList}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
        catToAdopt: state.cat,
        dogToAdopt: state.dog
});

export default connect(mapStateToProps)(AdoptAPet);