import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faGraduationCap, faBriefcase, faChartLine, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={styles.nextArrow} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={styles.prevArrow} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const Carousel = () => {
  const parcours = [
    {
      date: "2023",
      title: "Master 2 Marketing Digital",
      description: "EDC Paris Business School. Formation en e-marketing et stratégie web. Apprentissage du SEO et des bases de données.",
      icon: faGraduationCap
    },
    {
      date: "2021-2022",
      title: "Cheffe de projet en alternance",
      description: "SEO Digital Paris. Déploiement du plan de communication interne et externe. Coordination des newsletters et événements internes.",
      icon: faBriefcase
    },
    {
      date: "2019",
      title: "Master 2 Marketing Opérationnel",
      description: "ISMA Cameroun. Formation spécialisée en marketing et communication.",
      icon: faChartLine
    },
    {
      date: "2017-2019",
      title: "Assistante commerciale",
      description: "Orange, Paris. Gestion de la relation client, traitement des appels et suivi des comptes clients.",
      icon: faLaptopCode
    },
    {
      date: "2016",
      title: "BTS Commerce International",
      description: "ISMA Cameroun. Formation en commerce international.",
      icon: faGraduationCap
    }

  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ],
    customPaging: (i) => (
      <div style={styles.dot}>
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };



  return (
    <div style={styles.carouselContainer}>
      <Slider {...settings}>
        {parcours.map((item, index) => (
          <div key={index} style={styles.slideWrapper}>
            <div style={styles.card}>
              <div style={styles.dateBox}>
                <span style={styles.date}>{item.date}</span>
              </div>
              <div style={styles.content}>
                <div style={styles.iconWrapper}>
                  <FontAwesomeIcon icon={item.icon} style={styles.icon} />
                </div>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  carouselContainer: {
    padding: "40px 10px",
    maxWidth: "100%",
    margin: "0 auto",
    '@media (max-width: 768px)': {
      padding: "20px 5px",
    }
  },
  slideWrapper: {
    padding: "10px",
    '@media (max-width: 768px)': {
      padding: "5px",
    }
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    border: "3px solid #a9dff8",
    
    position: "relative",
    minHeight: "250px",
    '@media (max-width: 768px)': {
      minHeight: "200px",
    },
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    },
    height: "auto",
    width: "90%",
  },
  dateBox: {
    backgroundColor: "#f0b9cb",
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderBottom: "3px solid rgba(0,0,0,0.1)",
    '@media (max-width: 768px)': {
      padding: "8px",
    }
  },
  content: {
    padding: "25px",
    textAlign: "center",
    '@media (max-width: 768px)': {
      padding: "15px",
    }
  },
  iconWrapper: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgba(240,185,203,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(360deg)",
    },
    backgroundColor: "#a9dff8",
    '@media (max-width: 768px)': {
      width: "50px",
      height: "50px",
    }
  },
  icon: {
    fontSize: "1.8em",
    color: "white",
    '@media (max-width: 768px)': {
      fontSize: "1.5em",
    }
  },
  title: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "1.4em",
    fontWeight: "600",
    '@media (max-width: 768px)': {
      fontSize: "1.1em",
      marginBottom: "10px",
    }
  },
  description: {
    color: "#666",
    lineHeight: "1.8",
    fontSize: "1em",
    '@media (max-width: 768px)': {
      fontSize: "0.9em",
      lineHeight: "1.5",
    }
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#f0b9cb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "14px",
    margin: "15px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#e29cb2",
    },
    
  },
  date: {
    fontSize: "1.2em",
    letterSpacing: "1px",
    '@media (max-width: 768px)': {
      fontSize: "1em",
    }
  },
  nextArrow: {
    position: "absolute",
    right: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    backgroundColor: "#f0b9cb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e29cb2",
      transform: "translateY(-50%) scale(1.1)",
    },
  },
  prevArrow: {
    position: "absolute",
    left: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    backgroundColor: "#f0b9cb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e29cb2",
      transform: "translateY(-50%) scale(1.1)",
    },
    
  },
  sectionCarrousel: {
    '@media (max-width: 768px)': {
      padding: "20px 5px",
    }
  }
};

export default Carousel;
