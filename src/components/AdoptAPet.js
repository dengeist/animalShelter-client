import React from 'react';
import { connect } from 'react-redux';

import { fetchCat } from '../actions/catAction';
import { fetchDog } from '../actions/dogAction';

export class AdoptAPet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog()) 
    ]);
  }

  generateHTML(prop, idx) {
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

  render() {
    const { catToAdopt, dogToAdopt } = this.props;
  const [catKeys, dogKeys] = [Object.keys(catToAdopt), Object.keys(dogToAdopt)];
  const [catList, dogList] = [
    catKeys.map(this.generateHTML, catToAdopt),
    dogKeys.map(this.generateHTML, dogToAdopt)
  ];
    return (
    <div className="animals">
      <ul data-animal="cat">{catList}</ul>
      <ul data-animal="dog">{dogList}</ul>
    </div>
  );

  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(AdoptAPet);