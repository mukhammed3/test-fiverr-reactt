/* eslint-disable no-unused-vars */
import React from "react";

//styles
import modernNormalize from "modern-normalize";
import "./scss/main.scss";

//components
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App container">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
