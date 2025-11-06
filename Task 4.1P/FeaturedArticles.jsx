import React from "react";

export default function FeaturedArticles() {
  return (
    <section>
      <h2>Featured Articles</h2>
      <div className="cards">

        <div className="card">
          <img src="https://picsum.photos/200/300/?blur=4" alt="Cube" />
          <h3>Cube</h3>
          <p>This is rubics cube.</p>
          <p>This is very good</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/300/?blur=2" alt="Apple" />
          <h3>Apple</h3>
          <p>Apple is red</p>
          <p>It has very good taste</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/300/?blur=3" alt="Duck" />
          <h3>Duck</h3>
          <p>This is Duck</p>
          <p>It is white in color</p>
        </div>

      </div>
      <button className="btn">See more</button>
    </section>
  );
}
