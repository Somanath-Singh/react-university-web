import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Program from "./component/Programs/Program";
import Title from "./component/Title/Title";
import "./App.css";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  var program = ["Our Program", "What We Offer"];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        {/* <Title programs={program} /> */}
        <Program />
        <About />
        <Title subTitle="Galary" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
