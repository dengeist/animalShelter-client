import React from 'react';
import { connect } from 'react-redux';

import { adoptPet, fetchPet } from './actions';

import Pet from './components/Pet';

export class Dashboard extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchPet('cat')),
      this.props.dispatch(fetchPet('dog'))
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
  catToAdopt: Object.assign({}, state.cat.data, state.cat.loading),
  dogToAdopt: Object.assign({}, state.dog.data, state.dog.loading)
});

export default connect(mapStateToProps)(Dashboard);