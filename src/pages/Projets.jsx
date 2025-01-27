
import Maria from '../assets/Maria.png'
import Peluche from '../assets/projets/Peluche.png'
import CleanKing from '../assets/projets/CleanKing.png'
import ExplorEarth from '../assets/projets/Explor-Earth.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SmartHome from '../assets/projets/smartHome.png'
import { useState } from 'react';
import '../App.css'
import './Projets.css'
import { Link } from 'react-router-dom';



function Projets() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projet = [
    {
      title: "Explor-Earth",
      image: ExplorEarth,
      description: "Des voyages uniques au plus proche de la culture",
      theme: "Marketing Digital",
    },
    {
      title: "Smart home",
      image: SmartHome,
      description: "Améliorer le SEO du site web",
      theme: "seo/sea",
    },
    {
        title: "La maison des peluches",
        image: Peluche,
        description: "Création d'un site e-commerce pour la vente de peluches",
        theme: "e-commerce",
    },
    {
        title:"Création du site internet cleanking",
        image: CleanKing,
        description: "Création d'un site internet pour une entreprise de nettoyage",
        theme: "e-commerce",
    }
  ]
  
  return (
    <div className="projets-page">
      <nav className="navbar">
        <div className="logo">
          <img src={Maria} alt="Maria" className="logo-img" />
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/#apropos">À propos</a></li>
          <li><a href="/#parcours">Mon parcours</a></li>
          <li><a href="/#competences">Mes compétences</a></li>
          <li><a href="/ProjetMaria/projets">Mes projets</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="main">
        <section className="section-container">
        <div className="section-content-about">

          <h2 className="section-title">Mes projets</h2>
          <p className="projets-intro">
            Découvrez mes réalisations en communication et marketing digital
          </p>

          <div className="projet-container">
          {projet.map((item, index) => (
            <div className="projet-card" key={index}>
              <div className="projet-image-container">
                <img src={item.image} alt={item.title} className="projet-image" />
                <div className="projet-tag">{item.theme}</div>
              </div>
              <div className="projet-info">
                <h3>{item.title}</h3>
                <Link 
                  to={`/ProjetMaria/projet/${encodeURIComponent(item.title)}`} 
                  className="en-savoir-plus"
                >
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>
          ))}
          </div>

        </div>
          


        </section>
      </main>

      <footer className="footer">
        {/* Copiez le même footer que dans App.jsx */}
      </footer>
    </div>
  )
}

export default Projets 