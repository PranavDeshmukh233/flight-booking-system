import React from "react";
import Layout from "../../Layout/Layout";
import UserMenu from "../../Layout/UserMenu";
const Home = () => {
  return (
    <Layout title="Home">
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>Welcom to skytrip</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
