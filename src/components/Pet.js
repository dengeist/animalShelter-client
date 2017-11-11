import React from 'react';

export default function Pet(props){
  return (
    <section>
    <header>
      <h2 data-prop="name">{props.name}</h2>
      <img src={props.imageURL} alt="" />
    </header>
    <main>
      <h3>More about {props.name}</h3>
      <ul>
        <li data-prop="gender">{props.gender}</li>
        <li data-prop="age">{props.age}</li>
        <li data-prop="breed">{props.breed}</li>
        <li data-prop="story">{props.story}</li>
      </ul>
      <button 
        type="button"
        onClick={() => props.onAdoptAnimal()}
      >
        Adopt
      </button>
    </main>
  </section>
  );
}