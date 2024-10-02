import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";


export default function Home() {

  return (
    <div>
      <Header/>
      <Hero />
      <Hero2/>
      <Footer />
    </div>
  );
}
