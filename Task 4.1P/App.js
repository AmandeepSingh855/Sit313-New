import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}

export default App;