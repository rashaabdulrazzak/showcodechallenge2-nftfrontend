import React from "react";
import PropTypes from "prop-types";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h1> Welcome to the Showcode NEAR Challenge #2</h1>
        <div
          className="d-flex justify-content-center text-center"
          style={{ marginTop: "20px" }}
        >
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ textAlign: "center", width: "300" }}
          >
            <img src={coverImg} alt="" style={{ height: "300px" }} />
          </div>
          <h1 style={{ marginTop: "20px" }}>{name}</h1>
          <p style={{ marginTop: "10px", marginBottom: "10px" }}>
            Please connect your wallet to continue.
          </p>
          <button onClick={login} variant="outline-light">
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
