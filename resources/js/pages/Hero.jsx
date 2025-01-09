import React from 'react';
import '../../css/Hero.css';
import { Link } from '@inertiajs/react';

const Hero = () => {
 
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="hero-title">
              Bienvenue chez <span className="restaurant-name">Votre Restaurant</span>
            </h1>
            <p className="hero-description">
              Découvrez des plats délicieux, préparés avec amour. Scannez et commandez en toute simplicité.
            </p>
            <Link href="#menu" className="btn btn-primary btn-lg">
              Explorer le Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
