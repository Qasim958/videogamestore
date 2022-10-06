import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import { getLoginCredentialsFromLocalStorage } from "../custom/utils/localStorage";

const Cart = () => {
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
        <Nav isActive={"cart"} />
      </header>
      <main className="cart">Cart</main>
    </>
  );
};

export default Cart;
