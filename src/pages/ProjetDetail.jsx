import { useParams } from 'react-router-dom';
import Maria from '../assets/Maria.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Peluche from '../assets/projets/Peluche.png'
import CleanKing from '../assets/projets/CleanKing.png'
import ExplorEarth from '../assets/projets/Explor-Earth.png'
import SmartHome from '../assets/projets/SmartHome.png'

import './ProjetDetail.css'

function ProjetDetail() {
  const { title } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simuler une base de données de projets avec plus de détails
  const projetsDetails = {
    "Explor-Earth": {
      description: "Des voyages uniques au plus proche de la culture",
      theme: "Marketing Digital",
      fullDescription: "Quand j'ai commencé à réfléchir à ce que signifiait vraiment voyager, je me suis rendu compte qu'il me manquait quelque chose dans les expériences traditionnelles. <strong>Partir en voyage</strong>, pour moi, ce n'est pas seulement visiter des monuments ou admirer des paysages. C'est apprendre, découvrir et surtout vivre des moments uniques, en immersion totale dans la culture locale.\n\n" +
        "C'est à partir de cette idée que nous avons créé <strong>Explore Earth</strong>. Tout a commencé par une discussion entre amis sur nos vacances et ce que nous recherchions réellement en voyageant. Nous étions tous d'accord : le tourisme de masse n'avait plus d'attrait. Nous voulions de <strong>l'authenticité</strong>, des <strong>rencontres humaines</strong>, et une approche plus <strong>responsable</strong> de nos voyages.\n\n" +
        "J'ai donc travaillé sur une application qui permettrait aux voyageurs de sortir des sentiers battus et de vivre des expériences immersives. <strong>Explore Earth</strong> offre la possibilité de réserver directement des activités, des restaurants ou même des visites guidées auprès de prestataires locaux. L'idée, c'est que chaque voyage devienne une <strong>aventure humaine</strong> : rencontrer les habitants, découvrir leur mode de vie, et partager des moments qui laissent des souvenirs impérissables.",
      missions: {
        communication: [
          "Création et gestion de la stratégie de communication",
          "Conception de formulaires pour recueillir des informations et retours utilisateurs",
          "Rédaction et diffusion d'emailings et newsletters pour informer et fidéliser les utilisateurs"
        ],
        marketing: [
          "Réalisation d'analyses internes et externes (PESTEL, SWOT) pour définir les opportunités et menaces du marché",
          "Conduite d'études quantitatives et qualitatives",
          "Définition des cibles prioritaires et du positionnement de l'application",
          "Création d'une stratégie pour répondre aux attentes des utilisateurs connectés"
        ],
        gestionProjet: [
          "Suivi global du bon fonctionnement du projet",
          "Répartition des rôles au sein de l'équipe",
          "Utilisation d'outils de gestion de projet"
        ],
        chefferieProjet: [
          "Coordination des actions entre les membres de l'équipe",
          "Validation des étapes clés du projet",
          "Planification et pilotage des deadlines"
        ],
        creationContenu: [
          "Élaboration des contenus pour l'application",
          "Production et gestion des éléments multimédias"
        ],
        etudesRecherches: [
          "Analyse des tendances touristiques",
          "Étude des destinations ciblées",
          "Recherche et établissement de partenariats avec des prestataires locaux"
        ],
        financePartenariats: [
          "Recherche de financements extérieurs",
          "Négociation et mise en place de partenariats stratégiques",
          "Modélisation économique pour assurer la rentabilité"
        ]
      },
      image: ExplorEarth,
    },
    "Smart home": {
        description: "Optimisation du référencement pour les objets connectés et la domotique",
        theme: "SEO et Marketing Digital",
        fullDescription: "Le projet Smart Home vise à améliorer la visibilité en ligne des solutions de domotique et des objets connectés. En explorant les tendances actuelles et en résolvant les problèmes techniques liés au référencement, nous avons cherché à offrir une expérience utilisateur optimale tout en augmentant le trafic organique. \n\n" +
            "Notre démarche a consisté à analyser les contenus existants, optimiser les balises meta et résoudre les erreurs courantes de SEO telles que les doublons, les problèmes de redirection ou encore les images non compressées. À travers ces efforts, le projet a permis de renforcer la présence en ligne et d'attirer une audience ciblée intéressée par les technologies domestiques innovantes.",
        missions: {
            communication: [
                "Création et gestion de contenu adapté au SEO",
                "Rédaction d'articles optimisés pour les moteurs de recherche",
                "Mise en place d'une stratégie éditoriale pour les blogs et réseaux sociaux"
            ],
            optimisationSEO: [
                "Analyse et correction des erreurs de référencement technique (balises, redirections, etc.)",
                "Optimisation des meta descriptions et titres pour améliorer le CTR",
                "Compression des images et amélioration des performances du site"
            ],
            etudesRecherches: [
                "Analyse des mots-clés et de la concurrence",
                "Recherche de partenariats pour augmenter la visibilité",
                "Étude des comportements utilisateurs pour une meilleure navigation"
            ],
            gestionProjet: [
                "Coordination des actions entre les équipes techniques et éditoriales",
                "Utilisation d'outils SEO pour le suivi des performances",
                "Planification des mises à jour et audits réguliers"
            ]
        },
        image: SmartHome,
    },
    "La maison des peluches": {
        description: "Une boutique en ligne pour les amoureux des peluches et doudous, mêlant durabilité et adoption responsable.",
        theme: "E-commerce et Marketing Digital",
        fullDescription: "La Maison des Peluches est une boutique en ligne magique dédiée aux peluches et doudous, alliant produits neufs et d'occasion. Chaque peluche raconte une histoire unique, ayant été chérie auparavant et désormais prête à rejoindre un nouveau foyer.\n\n" +
            "Le site propose une expérience immersive avec des catégories variées telles que 'Nounours', 'Animaux', 'Disney', et 'Peluches du Monde'. Une section spéciale, 'Adopter une peluche', met en avant des peluches d'occasion soigneusement restaurées pour promouvoir une consommation plus durable. Grâce à une interface intuitive et des fonctionnalités comme des options de personnalisation, La Maison des Peluches est devenue une référence pour les amoureux des jouets câlins.",
        missions: {
            creationBoutique: [
                "Configuration de la boutique en ligne sur Shopify",
                "Création de catégories spécifiques pour organiser les produits",
                "Ajout de langues multiples (anglais, italien, japonais) via des applications de traduction"
            ],
            communicationMarketing: [
                "Création et envoi de newsletters pour promouvoir les produits et les offres",
                "Gestion des réseaux sociaux, notamment Instagram, pour engager la communauté",
                "Lancement de campagnes de réduction avec des codes promo"
            ],
            optimisationSite: [
                "Installation d'applications complémentaires (FAQ, GDPR, Booster apps)",
                "Personnalisation des modèles de pages pour le design mobile",
                "Optimisation SEO pour améliorer la visibilité en ligne"
            ],
            servicesClients: [
                "Mise en place d'un service de réparation et de personnalisation des peluches",
                "Création de pages dédiées aux dons pour encourager la seconde vie des peluches",
                "Ajout de cartes cadeaux disponibles en plusieurs montants"
            ]
        },
        image: Peluche,
    },
    "Création du site internet cleanking": {
        description: "Un site web professionnel dédié aux services de nettoyage pour entreprises et professionnels.",
        theme: "Services B2B et Gestion de Projets",
        fullDescription: "Clean King est une entreprise spécialisée dans les services de nettoyage pour les professionnels, conçue pour répondre aux besoins variés des bureaux, industries et commerces. En mettant l'accent sur la qualité, la ponctualité et la satisfaction client, nous avons développé une plateforme intuitive et efficace pour connecter les entreprises avec des experts en nettoyage.\n\n" +
            "Le site propose une présentation claire des services, des fonctionnalités de demande de devis personnalisés et un espace client pour la gestion des prestations. Grâce à une stratégie digitale bien pensée, Clean King facilite l'accès à des services professionnels de nettoyage tout en renforçant son engagement pour des pratiques écoresponsables.",
        missions: {
            creationSite: [
                "Développement d'un site vitrine pour présenter les services de nettoyage",
                "Mise en place d'une section de demande de devis en ligne",
                "Création d'un espace client pour la gestion des prestations et des factures"
            ],
            communicationMarketing: [
                "Rédaction de contenus optimisés pour le SEO afin d'améliorer la visibilité en ligne",
                "Lancement de campagnes Google Ads et de réseaux sociaux pour attirer les clients B2B",
                "Création d'une newsletter informative pour fidéliser les clients existants"
            ],
            gestionProjet: [
                "Coordination des équipes techniques et créatives pour assurer le bon déroulement du projet",
                "Planification et respect des deadlines grâce à des outils de gestion de projet",
                "Suivi des performances du site via des outils analytiques"
            ],
            servicesClients: [
                "Mise en place d'un chat en ligne pour répondre rapidement aux questions des clients",
                "Offre d'options flexibles pour les contrats de nettoyage récurrents ou ponctuels",
                "Ajout de témoignages clients pour renforcer la confiance et la crédibilité"
            ]
        },
        image: CleanKing,
    }
    // Ajoutez les autres projets...
  };

  const projetInfo = projetsDetails[title];

  return (
    <div className="projet-detail-page">
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
            <h2 className="section-title">{title}</h2>
            <p className="projet-theme">{projetInfo?.theme}</p>
            <p className="title-description">Description</p>
            <div className="projet-detail-container">
              <div className="projet-image">
                <img 
                  src={projetInfo?.image} 
                  alt={title} 
                  style={{ maxWidth: '100%', height: 'auto', width: '450px' }}
                />
              </div>
              <div className="projet-detail-content">
                {projetInfo?.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="projet-description-paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                
              </div>
            </div>
            <p className="title-description">Mission</p>
            <div className="missions-section">
                  {projetInfo?.missions && Object.entries(projetInfo.missions).map(([category, tasks]) => (
                    <div key={category} className="mission-category">
                      <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                      <ul>
                        {tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
            </div>
            {projetInfo?.video && <p className="title-description">Vidéo</p>}
            {projetInfo?.video && <div className="video-container">
              <video src={projetInfo?.video} controls />
            </div>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjetDetail; 