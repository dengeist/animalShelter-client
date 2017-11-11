import React from 'react';
import { connect } from 'react-redux';

import { fetchCat, fetchDog } from './actions';

import Pet from './components/Pet';

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
        <Pet 
          {...this.props.catToAdopt} 
          onAdoptAnimal={() => this.props.dispatch(fetchCat())}
        />
        <Pet
          {...this.props.dogToAdopt} 
          onAdoptAnimal={() => this.props.dispatch(fetchDog())}
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