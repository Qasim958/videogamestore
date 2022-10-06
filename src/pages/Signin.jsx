import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import { AUTH_TOKEN_URL } from "../custom/settings/api";
import { getApiData } from "../custom/utils/getApiData";
import {
  getLoginCredentialsFromLocalStorage,
  setLoginCredentialsToLocalStorage,
} from "../custom/utils/localStorage";
import { messageDialogue } from "../custom/utils/message";
import {
  validateCredentials,
  validateEmail,
  validatePassword,
} from "../custom/utils/validation";

const Signin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const credential = await getLoginCredentialsFromLocalStorage();

      if (credential) {
        return navigate("/browse", { replace: true });
      }
    };
    checkToken();
  }, []);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const getData = async () => {
    const res = await getApiData(AUTH_TOKEN_URL, "post");

    if (res.access_token) {
      setLoginCredentialsToLocalStorage({
        token: res.access_token,
        expire: res.expires_in,
      });
      navigate("/browse", { replace: true });
    } else {
    }
  };
  const handleChange = async (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    switch (field) {
      case "email":
        if (validateEmail(value, 0)) {
          setData({ ...data, email: value });
          messageDialogue(".emailMsg", "none", "green", "Email is valid");
        } else {
          setData({ ...data, email: "" });
          messageDialogue(".emailMsg", "block", "red", "Email is required");
          return false;
        }
        break;
      case "password":
        if (validatePassword(value, 8, 16)) {
          messageDialogue(".passwordMsg", "none", "green", "Password");
          setData({ ...data, password: value });
        } else {
          setData({ ...data, password: "" });
          messageDialogue(
            ".passwordMsg",
            "block",
            "red",
            "Password is required"
          );
          return false;
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCredentials(data.email, data.password)) {
      messageDialogue(".formMsg", "block", "red", "Invalid Email or Password");
    } else {
      messageDialogue(".formMsg", "block", "green", "...Loading");
      if (
        data.email === "hamzakhalidbhutta430@gmail.com" &&
        data.password === "123456789"
      ) {
        await getData();
      } else {
        messageDialogue(
          ".formMsg",
          "block",
          "red",
          "Invalid Email or Password"
        );
      }
    }
  };

  return (
    <>
      <header>
        <Nav isActive={"signin"} />
      </header>

      <main className="signin">
        <section className="siginin__form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="">
              <span className="formMsg"></span>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control email"
                name="email"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
              />
              <div className="form-text emailMsg"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control  password"
                name="password"
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                }}
              />
              <div className="form-text passwordMsg"></div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Signin;
