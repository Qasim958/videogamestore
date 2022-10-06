import React from "react";
import Nav from "../components/Nav";

const Signup = () => {
  return (
    <>
      <header>
        <Nav isActive={"signup"} />
      </header>
      <main className="signup">Signup</main>
    </>
  );
};

export default Signup;
