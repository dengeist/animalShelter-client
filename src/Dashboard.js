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
          loading={this.props.catLoading}
          onAdoptPet={() => this.props.dispatch(adoptPet('cat'))}
        />
        <Pet
          {...this.props.dogToAdopt}
          loading={this.props.dogLoading}
          onAdoptPet={() => this.props.dispatch(adoptPet('dog'))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data,
  catLoading: state.cat.loading,
  dogLoading: state.dog.loading
});

export default connect(mapStateToProps)(Dashboard);