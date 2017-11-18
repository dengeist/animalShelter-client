import React from 'react';

export default function Pet(props) {
  // If the animal is still loading,
  // We'll indicate that in the header
  let petHeader = (
    <header>
      <h2>Loading...</h2>
    </header>
  );
  // ... and leave the main empty
  let petMain = null;

  // If the animal is done loading,
  if (!props.loading) {
    // We'll put the animal's name and photo in the header,
    petHeader = (
      <header>
        <h2 data-prop="name">{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription} />
      </header>
    );

    // and build the main information about the animal.
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
    </section>
  );
}
