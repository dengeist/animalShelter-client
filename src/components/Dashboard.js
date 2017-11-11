import React from 'react';
import { connect } from 'react-redux';

import Pet from './Pet';

import { fetchCat } from '../actions/catAction';
import { fetchDog } from '../actions/dogAction';

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
        <Pet {...this.props.catToAdopt}/>
        <Pet {...this.props.dogToAdopt}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);