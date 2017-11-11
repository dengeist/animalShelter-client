import React from 'react';
import { connect } from 'react-redux';

import { fetchCat } from '../actions/catAction';
import { fetchDog } from '../actions/dogAction';

export class Dashboard extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ]);
  }

  generatePetArticle({ age, breed, gender, imageURL, name, story }, species) {
    return (
      <article data-animal={species}>
        <header>
          <h2 data-prop="name">{name}</h2>
          <img src={imageURL} alt="" />
        </header>
        <main>
          <h3>More about {name}</h3>
          <ul>
            <li data-prop="gender">{gender}</li>
            <li data-prop="age">{age}</li>
            <li data-prop="breed">{breed}</li>
            <li data-prop="story">{story}</li>
          </ul>
        </main>
      </article>
    );
  }

  render() {
    const { catToAdopt, dogToAdopt } = this.props;
    const [catArticle, dogArticle] = [
      this.generatePetArticle(catToAdopt, 'cat'),
      this.generatePetArticle(dogToAdopt, 'dog')
    ];

    return (
      <div className="animals">
        {catArticle}
        {dogArticle}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);