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
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);