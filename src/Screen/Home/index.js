import React from "react";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Card from "./Component/Card";
import s from "./home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={s.background}>
        <p>Book With Us And Enjoy your Journey !</p>
      </div>
      <div className={s.filter}>
        <Filter />
      </div>
      <section className={s.section}>
        <div className={s.h1}>Search a best place in the world</div>
        <p className={s.p}>
          Whether you’re looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </p>
        <div className={s.card}>
          <Card />
          <Card isHot />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Home;
