import { useState, useEffect } from 'react'
import './App.css'
import Maria from './assets/Maria.png'
import profile from './assets/profile.jpg'
import PhotoProfile from './assets/PhotoProfile.png'
import Carrousel from './carrousel'
import LinkedInIcon from './assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'
import Projets from './pages/Projets'
import ProjetDetail from './pages/ProjetDetail'
import cvFile from './assets/cv_marie.pdf';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projet/:title" element={<ProjetDetail />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

// Créez un composant Home pour la page d'accueil
function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const texts = [
    "Disponible pour des postes de communication, commerce ou marketing",
    "Passionnée par le marketing digital",
    "Experte en relations publiques"
  ];

  useEffect(() => {
    let currentText = texts[textIndex];
    let currentChar = 0;
    let isTyping = true;

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (currentChar < currentText.length) {
          setDisplayText(currentText.slice(0, currentChar + 1));
          currentChar++;
        } else {
          setTimeout(() => {
            isTyping = false;
            currentChar = currentText.length;
          }, 1000);
        }
      } else {
        if (currentChar > 0) {
          setDisplayText(currentText.slice(0, currentChar - 1));
          currentChar--;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 500);
        }
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  useEffect(() => {
    const closeMenu = (e) => {
      // Ferme le menu si on clique en dehors de la navbar
      if (!e.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    // Ajoute l'écouteur d'événement
    document.addEventListener('click', closeMenu);

    // Nettoie l'écouteur d'événement
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
       <nav className="navbar">
        <div className="logo">
          <img src={Maria} alt="Maria" className="logo-img" />
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#apropos" onClick={handleNavLinkClick}>À propos</a></li>
          <li><a href="#parcours" onClick={handleNavLinkClick}>Mon parcours</a></li>
          <li><a href="#competences" onClick={handleNavLinkClick}>Mes compétences</a></li>
          <li><a href="/projets" onClick={handleNavLinkClick}>Mes projets</a></li>
          <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>

        </ul>
      </nav> 

      <main className="main">
        {/* Le reste de votre contenu ici */}
        <section className="profile">
          <div className="profile-text">
            <img src={profile} alt="profile" className="profile-img" />
            <div className="profile-text-content">
              <h1>Marie-Anne Lebogo</h1>
              <h2 className="typing-effect">
                {displayText}
                <span className="caret"></span>
              </h2>
            </div>
          </div>
        </section> 
        {/* Mettre une section avec deux div centrées et identiques et cote à cote*/}
        <section className="section-container" id="apropos">
          <div className="section-content-about">
            <h2 className="section-title">À propos</h2>
            <p className="section-text">
              Bienvenue sur mon <b>portfolio,</b>
            </p>
            <p className="section-text">
              je m'appelle Marie-Anne Lebogo,
            </p>
            <p className="section-text">
              Dotée d'une <b>grande capacité d'adaptation</b>, <b>dynamique</b>, <b>proactive</b> et <b>sociale</b>, 
              je capitalise plus de trois années d'expérience dans des contextes professionnels variés.
            </p>
            <p className="section-text">
              Mes compétences en matière de <b className="section-text-bold">stratégie marketing</b>, en <b className="section-text-bold">campagne de communication</b>, 
              en <b className="section-text-bold">gestion et suivi des performances des sites web</b> et en <b className="section-text-bold">organisation des évènements 
              et salons marketing</b> me permettront de répondre aux besoins de votre entreprise en pleine croissance.
            </p>
            <div className="section-text-button">
              <a 
                href={cvFile} 
                download="CV_Marie_Anne_Lebogogo.pdf"
                className="section-text-button-cv"
              >
                Mon CV
              </a>
              <Link to="/projets" className="section-text-button-cv">Mes projets</Link>
            </div>
          </div>
          <div className="section-content-image">
            <img src={PhotoProfile} alt="PhotoProfile" className="photo-profile-rounded" />
          </div>
        </section> 
        {/* Section carrousel avec les images de mes projets*/}
        
        <section className="section-carrousel" id="parcours">
        {/* <h2 className="section-title">Mon Parcours</h2> */}
        <h2 className="section-title">Mon parcours</h2>
        <Carrousel />
        </section>
        <section className="section-carrousel" id="competences">
          <h2 className="section-title">Mes compétences</h2>
          <p className="competences-intro">
            Découvrez l'ensemble de mes compétences acquises durant mes études, mon stage et mon alternance.
          </p>
          
          <div className="competences-grid">
            <div className="competence-block">
              <h3 className="competence-block-title">Webmarketing & Communication</h3>
              <ul className="competence-list">
                <li>Analyse de données avec <span className="highlight">Google Analytics</span></li>
                <li>Création de campagnes de notoriété : <span className="highlight">Google ADS et Facebook ADS</span></li>
                <li>Rédaction pour le web et référencement naturel (<span className="highlight">SEO</span>)</li>
                <li>Outils marketing : <span className="highlight">PESTEL, SWOT, Personas</span></li>
                <li>Création et envoi d'emailing (<span className="highlight">Brevo</span>)</li>
                <li>Veille média et <span className="highlight">Community management</span></li>
                <li>Stratégie de communication & social média</li>
              </ul>
            </div>

            <div className="competence-block">
              <h3 className="competence-block-title">Graphisme & Vidéo</h3>
              <ul className="competence-list">
                <li>Maîtrise des logiciels spécifiques à la conception de visuels : Suite Adobe (<span className="highlight">Photoshop, Illustrator</span> et <span className="highlight">Indesign</span>), <span className="highlight">Canva</span> et <span className="highlight">Bannersnack</span></li>
                <li>Utilisation d'<span className="highlight">Adobe XD</span> et <span className="highlight">Figma</span> pour la création de maquettes</li>
                <li>Utilisation des logiciels de la Suite Adobe pour les montages vidéos et motion design (<span className="highlight">Premier Pro, Audition</span> et <span className="highlight">After effect</span>)</li>
              </ul>
            </div>

            <div className="competence-block">
              <h3 className="competence-block-title">Développement Web</h3>
              <ul className="competence-list">
                <li>Création de sites internet via le <span className="highlight">CMS WordPress</span> avec Elementor et Elementor Pro</li>
                <li>Utilisation de <span className="highlight">PrestaShop</span> pour la réalisation d'un site e-commerce</li>
                <li>Base en <span className="highlight">HTML, CSS, Javascript</span> et <span className="highlight">PHP</span></li>
              </ul>
            </div>

            <div className="competence-block">
              <h3 className="competence-block-title">Gestion de projet</h3>
              <ul className="competence-list">
                <li><span className="highlight">Diagramme de Gantt</span> pour le suivi des tâches lors de projets de groupe</li>
                <li><span className="highlight">Méthode MoSCoW</span> pour définir les priorités d'un projet</li>
                <li>Utilisation de <span className="highlight">Trello</span> et <span className="highlight">Monday</span> pour les projets d'équipe</li>
                <li>Utilisation d'<span className="highlight">Agorapulse</span> pour planifier et gérer les posts en équipe</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section-carrousel" id="contact">
          {/* <img src={RoseBackgroundContact} alt="RoseBackgroundContact" className="rose-background-contact" /> */}
            <h2 className="section-title">Me contacter</h2>
            <p >N'hésitez pas à me contacter via ce formulaire ou sur mon profil LinkedIn</p>
            
            <div className="contact-content">              
              <form className="contact-form">
                <div className="form-group">
                    <input type="text" placeholder="Nom *" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Prénom *" required />
                  </div>
                <div className="form-group">
                  <input type="email" placeholder="E-mail *" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message *" required></textarea>
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
              </form>
            </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-contact">
            <a href="mailto:marie-anne.lebogo@gmail.com">marie-anne.lebogo@gmail.com</a>
            <a href="tel:0777068072">07 77 06 80 72</a>
          </div>
          <nav className="footer-nav">
            <a href="#apropos">À propos</a>
            <a href="#parcours">Mon parcours</a>
            <a href="#competences">Mes compétences</a>
            <a href="/projets">Mes projets</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-social">
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="footer-linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Marie-Anne LEBOGO</p>
          <a href="#mentions-legales">Mentions légales</a>
        </div>
      </footer>
    </div>
  )
}

export default App
