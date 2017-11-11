import React from 'react';
import { connect } from 'react-redux';

import Pet from './Pet';

import { fetchCat, fetchDog } from '../actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ]);
  }


  render() {
    console.log(this.props)
    return (
      <div className="animals">
        <Pet {...this.props.catToAdopt} species="cat"/>
        <Pet {...this.props.dogToAdopt} species="dog"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);