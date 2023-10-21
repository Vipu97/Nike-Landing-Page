import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Corousel from "./Components/Corousel/Corousel";
import Quality from "./Components/Quality/Quality";
import Features from "./Components/Features/Features";
import Offer from "./Components/Offer/Offer";
import Reviews from "./Components/Reviews/Reviews";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
      </main>
      <Corousel />
      <Quality />
      <Features />
      <Offer />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
