import React from "react";

export default function FeaturedTutorials() {
  return (
    <section>
      <h2>Featured Tutorials</h2>
      <div className="cards">

        <div className="card">
          <img src="https://picsum.photos/200/300?random=9" alt="Bear" />
          <h3>This is Bear</h3>
          <p>It is wild animal</p>
          <p> Not safe for kids</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/300?random=7" alt="Lion" />
          <h3>Lion</h3>
          <p>this is lion</p>
          <p>It is dangerous</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/300?random=1" alt="Tree" />
          <h3>Tree</h3>
          <p>This is tree.</p>
          <p>It is in ocean</p>
        </div>

      </div>
      <button className="btn">See more tutorial</button>
    </section>
);
}