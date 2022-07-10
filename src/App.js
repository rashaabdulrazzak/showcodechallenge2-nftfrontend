import React from "react";

import { login, logout } from "./utils/near";

import Mint from "./Components/Mint";
import Cover from "./Components/Cover";
import coverImg from "./assets/img/cover.png";

import "./App.css";

const App = () => {
  const account = window.walletConnection.account();

  return (
    <>
      {account.accountId ? (
        <div className="container ">
          <h1 style={{ marginBottom: "25px" }}>hello {account.accountId} !</h1>
          <Mint logout={logout} nftImage={coverImg} />
        </div>
      ) : (
        <Cover name="Mint Your NFT" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;
