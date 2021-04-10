import Head from 'next/head';
import Link from 'next/link';
import Tilt from 'react-tilt';
import React, { useRef, useEffect } from 'react';
import { TimelineLite, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function Home() {

  let section = useRef(null);
  let skill = useRef(null);
  let tl = new TimelineLite({delay: 0.3});

  useEffect(() => {
    // Section Const
    const firstSection = section.children[1];
    const secondSection = section.children[2];
    const thirdSection = section.children[3];
    const fourthSection = section.children[4];
    const fifthSection = section.children[5];
    const sixthSection = section.children[6];
    const seventhSection = section.children[7];
    const eighthSection = section.children[8];
    const ninthSection = section.children[9];
    const tenthSection = section.children[10];

    // Skill Const
    const firstSkill = skill.children[0];
    const secondSkill = skill.children[1];
    const thirdSkill = skill.children[2];

    // Section Animation
    gsap.from(firstSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: firstSection,
        start: 'top 50%',
        end: '+=300'
      }
    })
    gsap.from(secondSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: secondSection,
        start: 'top 60%',
        end: '+=300'
      }
    })
    gsap.from(thirdSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: thirdSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(fourthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: fourthSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(fifthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: fifthSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(sixthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: sixthSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(seventhSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: seventhSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(eighthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: eighthSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(ninthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: ninthSection,
        start: 'top 70%',
        end: '+=300'
      }
    })
    gsap.from(tenthSection, {y: 80, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: tenthSection,
        start: 'top 80%',
        end: '+=300'
      }
    })

    // Skill Animation
    gsap.from(firstSkill, {y: 200, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: firstSkill,
        start: 'top 120%',
        end: '+=300'
      }
    })
    gsap.from(secondSkill, {y: 200, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: secondSkill,
        start: 'top 110%',
        end: '+=300'
      }
    })
    gsap.from(thirdSkill, {y: 200, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: thirdSkill,
        start: 'top 100%',
        end: '+=300'
      }
    })
  }, [tl]);

  return (
    <div>
      <Head>
        <title>Nicolas Diot | Portfolio</title>
        <meta name="description" content="Nicolas Diot, développeur freelance spécialisé en front React et intégrateur, situé à Troyes et à Paris.
          Je créer des sites vitrines, e-commerces, et je m'occupe de la maintenance de vos sites internet." />
        <link rel="icon" href="../favicon-n.png" />
      </Head>

      <div className="home-animation--bg"></div>
      <div className="home-animation"></div>

      <header className="top-bar">
        <Link href="/">
          <a className="top-bar__logo">NICOLAS / DIOT</a>
        </Link>
        <Link href="mailto:nicolasdiot10@gmail.com?subject=Travaillons%20ensemble!">
          <a className="top-bar-info">
            <div className="top-bar__mail">
              <div>CONTACTEZ MOI</div>
              <div className="top-bar__mail-underline"></div>
            </div>
            <img className="top-bar__mail-logo" src="logo_mail.png" alt="mail logo" />
          </a>
        </Link>
      </header>

      <div className="side-bar-left">
        {/* <a href="#">
          <div className="menu__lines">
            <div className="menu__line menu__line--top"></div>
            <div className="menu__line menu__line--center"></div>
            <div className="menu__line menu__line--bottoms"></div>
          </div>
          <div className="menu__menu">
            
          </div>
        </a> */}
      </div>

      <div className="side-bar-right">
        <Link href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/">
          <a target="_blank" rel="noreferrer">
            <img className="logo-social-linkedin" src="logo_linkedin.png" alt="linkedin logo" />
          </a>
        </Link>
        <Link href="https://www.malt.fr/profile/nicolasdiot" >
          <a target="_blank" rel="noreferrer">
            <img className="logo-social" src="logo_malt.png" alt="malt logo" />
          </a>
        </Link>
        <Link href="https://github.com/Scream10">
          <a target="_blank" rel="noreferrer">
            <img className="logo-social" src="logo_github.png" alt="github logo" />
          </a>
        </Link>
      </div>

      <div className="bottom-bar"></div>

      <div className="main-container" ref={el => section = el}>
        <Tilt className="Tilt" options={{ max : 24, scale: .9, perspective: 1000, transition: true }}>
          <div className="Tilt-inner">
            <div className="home-hero">
              <p>Nicolas Diot,<br />Développeur Web</p>
              <div className="home-hero__circle home-hero__circle--1"></div>
              <div className="home-hero__circle home-hero__circle--2"></div>
              <div className="home-hero__circle home-hero__circle--3"></div>
              <div className="home-hero__circle home-hero__circle--4"></div>
              <img src="logo-arrow-down.png" alt="logo arrow down" className="home-hero__scroll" />
            </div>
          </div>
        </Tilt>
        

        <div className="section">
          <div id="section-about">
            <div className="section-title">
              <p>A PROPOS</p>
            </div>
            <div className="separator-dashes">
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
            </div>
          </div>

          <div className="about-container">
            <div className="about-img-container">
              <img src="photo_profil.jpg" alt="photo nicolas diot" />
            </div>
            <div className="about-content">
              <div className="main-headline main-headline--offset">
                <h1 className="main-headline__headline">Nicolas Diot, Développeur Front-End basé à Troyes et à Paris.</h1>
                <div className="main-headline__separator"></div>
              </div>
              <p className="p-large">
                Passionné par la technologie, je me suis formé au développement web et j'ai rapidement 
                consolidé mes compétences en Front End en apprenant quotidiennement de nouveaux outils.
                <br/>
                J'aime résoudre les problèmes que propose le code en y incluant créativité, innovation et design. 
                Je serai ravi de développer de nouveaux projets, n'hésitez pas à me contacter pour me 
                faire part de vos idées.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div id="section-skill">
            <div className="section-title">
              <p>MES SERVICES</p>
            </div>
            <div className="separator-dashes">
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
            </div>
          </div>
          <div className="main-headline main-headline--center">
            <h2 className="main-headline__headline">Développement web et intégration</h2>
            <div className="main-headline__separator main-headline__separator--center"></div>
          </div>

          <div className="row">
            <div className="skills" ref={el => skill = el}>
              <div className="skill">
                <div className="skill-img">
                  <img src="undraw_programming_2svr.png" alt="logo development" />
                </div>
                <h3 className="skill-title">Développement</h3>
                <div className="skill-separator"></div>
                <p className="skill-bullet">Site WordPress</p>
                <p className="skill-bullet">Site E-commerce</p>
                <p className="skill-bullet">Site Sur Mesure</p>
              </div>
              <div className="skill">
                <div className="skill-img">
                  <img src="undraw_complete_design_ongo.png" alt="logo design" />
                </div>
                <h3 className="skill-title">Refonte</h3>
                <div className="skill-separator"></div>
                <p className="skill-bullet">Maquette UI/UX</p>
                <p className="skill-bullet">Template WordPress</p>
                <p className="skill-bullet">Intégration</p>
              </div>
              <div className="skill">
                <div className="skill-img">
                  <img src="undraw_maintenance_cn7j.png" alt="logo maintenance" />
                </div>
                <h3 className="skill-title">Maintenance</h3>
                <div className="skill-separator"></div>
                <p className="skill-bullet">Mise à jour</p>
                <p className="skill-bullet">Référencement / SEO</p>
                <p className="skill-bullet">Nouvelle feature</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div id="section-work">
            <div className="section-title">
              <p>MES REALISATIONS</p>
            </div>
            <div className="separator-dashes">
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
            </div>
          </div>
          <div className="case-container">
            <div className="case-container-content">
              <div className="light-header">UI/UX, Developpement back & front</div>
              <div className="main-headline">
                <h1 className="main-headline__headline main-headline__headline--right-aligned">Coach Me :<br/> Site de sport</h1>
                <div className="main-headline__separator main-headline__separator--right"></div>
              </div>
              <div className="btn-container">
                <div className="btn-bg"></div>
                <Link href="/projets/coachme">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
            <div className="case-container-img case-container-img--right">
              <img src="projet-coachme.png" alt="projet coachme" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-SEMIOFFICE.png" alt="projet semi-office" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">Developpement back & front</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline">Semi Office :<br/> Portfolio de designer</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <Link href="/projets/semioffice">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-content">
              <div className="light-header">wordPress, responsive design</div>
              <div className="main-headline">
                <h1 className="main-headline__headline main-headline__headline--right-aligned">Ombeline Durey :<br/> Site en Digital Marketing</h1>
                <div className="main-headline__separator main-headline__separator--right"></div>
              </div>
              <div className="btn-container">
                <div className="btn-bg"></div>
                <Link href="/projets/ombelinedurey">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
            <div className="case-container-img case-container-img--right">
              <img src="projet-ombelinedurey.png" alt="projet ombeline durey" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-UNIONCONSUL.png" alt="projet semi-office" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">refonte, wordpress</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline main-headline__headline--small">UCHF :<br/> Union des Consuls Honoraire de France</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <Link href="/projets/uchf">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-content">
              <div className="light-header">wordpress, responsive design</div>
              <div className="main-headline">
                <h1 className="main-headline__headline main-headline__headline--right-aligned">Multi Gaz Sensor :<br/> Site produit médicale</h1>
                <div className="main-headline__separator main-headline__separator--right"></div>
              </div>
              <div className="btn-container">
                <div className="btn-bg"></div>
                <Link href="/projets/multigazsensor">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
            <div className="case-container-img case-container-img--right">
              <img src="projet-MULTI.png" alt="projet ombeline durey" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-GARAGEBOIS.png" alt="projet votre garage bois" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">integration, bootstrap</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline main-headline__headline--small">Votre Garage Bois :<br/> Intégration d'une maquette</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <Link href="/projets/votregaragebois">
                  <a className="btn-content">Découvrir</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div id="section-company">
            <div className="section-title">
              <p>ILS M'ONT FAIT CONFIANCE</p>
            </div>
            <div className="separator-dashes">
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
              <div className="separator-dash-line"></div>
            </div>
          </div>

          <div className="companies">
            <div className="company">
              <img src="logo-uchf.png" alt="logo UCHF" />
            </div>
            <div className="company">
              <img src="logo-multi-gaz-sensor.png" alt="logo multi gaz sensor" />
            </div>
            <div className="company">
              <img src="logo-facton.jpg" alt="logo faton" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="p-center">
            <p>
              <br />
              Une question ? Un devis ? N'hésitez pas à me contacter par mail, je vous répondrais dans les plus brefs délais.              
            </p>
          </div>
          <Link href="mailto:nicolasdiot10@gmail.com?subject=Travaillons%20ensemble!">
            <a className="contact-container">
              <div className="p-contact">nicolasdiot10@gmail.com</div>
              <div className="contact-email-underline"></div>
            </a>
          </Link>
        </div>

        <footer>
          <Link href="/mentions-legales">
            <a>mentions legales</a>
          </Link>
        </footer>

      </div>
    </div>
    
  )
}
