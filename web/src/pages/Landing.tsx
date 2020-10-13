import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para as crianças</h1>
          <p>Visite orfanatos e alegre o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Patrocínio do Muriaé</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>
    </div>
  );
}

export default Landing;