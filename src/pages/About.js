import React from "react";

export default function About() {
  return (
    <section className="section about-section">
            <h1 className="section-title">about</h1>
      <div className="about-container">
      <p>
 This is a very simple website that displays a list of cocktails, all of the data is fetched from the <a href="https://www.thecocktaildb.com/" target="_blank">Cocktail DB API</a>. Each cocktail page will display the following data: 
      </p>
      <ul>
        <li>
          name
        </li>
        <li>
          category
        </li>
        <li>
          info
        </li>
        <li>
          glass type to be served in
        </li>
        <li>
          instructions on how to make the cocktail
        </li>
        <li>
          ingredients
        </li>
      </ul>
      <br></br>
      <p>If you have a favourite cocktail, be sure to use the search bar on the homepage to find out more about it!
      </p>
      </div>
    </section>
  );
}
