import React from "react";
import { Link } from "react-router-dom";

// static
import "../static/styles/pages/landingPage.css";
import title from "../static/images/Hamburgy.png";
import { FaSearch } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="landing-page">
      <img src={title} alt="title" className="Hamburgy" />
      <div className="landing-content">
        <div className="landing-text">
          <p>Encontre a hamburgueria perfeita para você.</p>
          <Link to="/map">
            Explorar <FaSearch />
          </Link>
        </div>
        <div className="images">
          <img src="/favicon.ico" className="logo" alt="logo" />
        </div>
      </div>
      <p className="city">Curitiba - Paraná</p>
    </div>
  );
};

export default App;
