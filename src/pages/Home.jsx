import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      {" "}
      <header>
        <Nav isActive={"home"} />
      </header>
      <main className="home">
        <section className="home__heading">
          <h1>Welcome To G V S</h1>
        </section>

        <section className="home__buttons">
          <Link to="signin">SIGN IN</Link>
          <Link to="signup">SIGN UP</Link>
        </section>
      </main>
    </>
  );
};

export default Home;
