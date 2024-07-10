import React from "react";
import Layout from "../../Layout/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="home-container" style={{ minHeight: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Welcome to SkyTrip</h1>
      </div>
    </Layout>
  );
};

export default Home;
