import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="page-grid">
        <SideBar />
        <Footer />
      </section>
    </div>
  );
}

export default App;
