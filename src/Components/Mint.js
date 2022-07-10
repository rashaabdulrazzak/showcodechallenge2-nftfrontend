import React from "react";
import { useState, useEffect } from "react";
import { nft_mint, nft_tokens_for_owner } from "../utils/nftMint";

import celebrate from "../assets/img/confetti.png";

const Mint = ({ logout, nftImage }) => {
  const [nftMinted, setNftMinted] = useState(false);
  async function handle_click(name) {
    const result = await nft_mint(name);
    console.log({ result });
  }
  useEffect(() => {
    const mintedNft = async () => {
      const result = await nft_tokens_for_owner(`${window.accountId}`);
      console.log(result);
      if (result.length > 0) {
        if (
          result.filter(function (e) {
            return e.token_id === `${window.accountId}-nft-challenge`;
          }).length > 0
        ) {
          /* if the account already mint its nft */
          setNftMinted(true);
        }
      }
    };
    mintedNft();
  }, []);

  return (
    <div>
      {nftMinted ? (
        <div>
          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "30px" }}>
              You have already minted your nft
            </h3>
            <img src={celebrate} alt="celebrate" style={{ height: "100px" }} />
            <p style={{ margin: "30px" }}>
              <a href={"https://wallet.testnet.near.org/"}>
                you can check them from your wallet in the collectibles tab!
              </a>
            </p>
          </div>
          <div style={{ margin: "0 auto", textAlign: "center" }}>
            <button style={{ margin: "5px" }} disabled>
              {" "}
              Mint your nft{" "}
            </button>
            <button style={{ margin: "5px" }} onClick={logout}>
              logout{" "}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div style={{ paddingBottom: "20px" }}>
            <img src={nftImage} alt="nft" style={{ height: 300 }} />
          </div>
          <div style={{ margin: "0 auto", textAlign: "center" }}>
            <button
              style={{ margin: "5px" }}
              onClick={() => handle_click(`${window.accountId}`)}
            >
              {" "}
              Mint your nft{" "}
            </button>
            <button style={{ margin: "5px" }} onClick={logout}>
              logout{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Mint;
