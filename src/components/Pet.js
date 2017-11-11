import React from 'react';

export default function Pet(props){
  return (
    <article data-animal={props.species}>
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
    </main>
  </article>
  );
}