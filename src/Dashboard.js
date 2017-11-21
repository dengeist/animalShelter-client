import React from 'react';
import { connect } from 'react-redux';

import { fetchCat, adoptCat, fetchDog, adoptDog } from './actions/';

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
          onAdoptPet={() => this.props.dispatch(adoptCat())}
        />
        <Pet
          {...this.props.dogToAdopt}
          onAdoptPet={() => this.props.dispatch(adoptDog())}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: Object.assign({}, state.cat.data, {loading: state.cat.loading}),
  dogToAdopt: Object.assign({}, state.dog.data, {loading: state.dog.loading})
});

export default connect(mapStateToProps)(Dashboard);