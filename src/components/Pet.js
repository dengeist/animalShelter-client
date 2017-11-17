import React from 'react';

export default function Pet(props) {
  let petHeader = (
      <header>
        <h2>Loading...</h2>
      </header>
  );
  let petMain = null;

  if (!props.loading) {
    petHeader = (
    <header>
      <h2 data-prop="name">{props.name}</h2>
      <img src={props.imageURL} alt={props.imageDescription} />
    </header>
    );
    petMain = (
      <main>
        <h3>More about {props.name}</h3>
        <dl>
          <dt>Sex</dt>
          <dd>{props.gender}</dd>
          <dt>Age</dt>
          <dd>{props.age} years</dd>
          <dt>Breed</dt>
          <dd>{props.breed}</dd>
          <dt>Story</dt>
          <dd>{props.story}</dd>
        </dl>
        <button type="button" onClick={() => props.onAdoptPet()}>
          Adopt
        </button>
      </main>
    );
  }


  return (
  <section className="animal">
  {petHeader}
  {petMain}
  </section>)
  }
