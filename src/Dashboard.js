import React from 'react';
import { connect } from 'react-redux';

import { adoptPet, fetchCat, fetchDog } from './actions';

import Pet from './components/Pet';

export class Dashboard extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ]);
  }

  render() {
    return (
      <div className="animals">
        <Pet
          {...this.props.catToAdopt}
          onAdoptPet={() => this.props.dispatch(adoptPet('cat'))}
        />
        <Pet
          {...this.props.dogToAdopt}
          onAdoptPet={() => this.props.dispatch(adoptPet('dog'))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);