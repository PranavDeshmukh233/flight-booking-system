import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import HomeImage from "../../Images/Home.jpg";
import { AuthContext } from "../../Context/AuthContext";

const Home = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white"
  };

  const textStyle = {
    color: "black",
    fontWeight: "700",
    fontSize: "3rem",
    textAlign: "center"
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 15px",
    fontSize: "1.3rem",
    color: "white",
    backgroundColor: "#004085",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    display: "inline-block",
    width: "170px",
    textAlign: "center"
  };

  const buttonHoverStyle = {
    backgroundColor: "#002752"
  };

  const handleButtonClick = () => {
    if (auth.token) {
      navigate("/search");
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout title="Home">
      <div className="container-fluid m-0 p-0" style={backgroundStyle}>
        <div className="row w-100 m-0 d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-center w-100" style={textStyle}>Welcome to SkyTrip!</h3>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onClick={handleButtonClick}
          >
            Search Flight
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
