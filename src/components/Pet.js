import React from 'react';

export default function Pet(props) {
  // If the animal is still loading,
  // we'll return early.
  if (props.loading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  // If the animal is done loading,
  // we can build a proper section 
  // with a header and a main.

  return (
    <section className="animal">
      <header>
        <h2 data-prop="name">{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription} />
      </header>
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
    </section>
  );
}
