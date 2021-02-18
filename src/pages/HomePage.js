import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      {<h1>Bonjour john</h1>}

      <Link to="/interventions">
        <button className="btn btn-primary mr-4">
          <i className="fas fa-link">Mes interventions </i>
        </button>
      </Link>
      <Link to="/historiques">
        <button className="btn btn-success">
          <i className="fas fa-history">Historiques </i>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
