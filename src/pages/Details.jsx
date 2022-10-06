import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import { getLoginCredentialsFromLocalStorage } from "../custom/utils/localStorage";

const Details = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const credential = await getLoginCredentialsFromLocalStorage();
      if (!credential) {
        return navigate("/signin", { replace: true });
      } 
    };
    checkToken();
  }, []);
  return (
    <>
      <header>
        <Nav isActive={"details"} />
      </header>
      <main className="details">Details</main>
    </>
  );
};

export default Details;
