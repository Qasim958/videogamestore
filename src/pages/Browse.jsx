import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getApiData } from "./../custom/utils/getApiData";
import { getLoginCredentialsFromLocalStorage } from "../custom/utils/localStorage";
import { BASE_DATA_URL, CLIENT_ID } from "../custom/settings/api";
import Nav from "../components/Nav";

const Browse = () => {
  const navigate = useNavigate();
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const checkToken = async () => {
      const credential = await getLoginCredentialsFromLocalStorage();

      if (!credential) {
        return navigate("/signin", { replace: true });
      } else {
        const res = await getApiData(BASE_DATA_URL, "POST", {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${credential.token}`,
        });

        console.log(await res);
        if (await res) {
          setGamesData(res);
        }
      }
    };
    checkToken();
  }, []);

  console.log(gamesData);
  return (
    <>
      <header>
        <Nav isActive={"browse"} />
      </header>
      <main className="browse">
        <section className="browse__heading">
          <h1>Games</h1>
          {gamesData ? (
            <div>
              {gamesData.map((v, i) => {
                return (
                  <div key={i}>
                    <h1>{v.name}</h1>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>..Loading</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Browse;
