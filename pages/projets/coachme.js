import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function CoachMe() {

  let app = useRef(null);
  let image = useRef(null);
  let concept = useRef(null);
  let information = useRef(null);
  let tl = new TimelineLite({delay: 0.3});

  useEffect(() => {
    // Information Const
    const fristHeaderInformation = information.children[0].children[0];
    const secondHeaderInformation = information.children[1].children[0];
    const thirdHeaderInformation = information.children[2].children[0];
    const firstInformation = information.children[0].children[1];
    const secondInformation = information.children[1].children[1];
    const thirdInformation = information.children[2].children[1];

    // Concept Const
    const imageContent = concept.children[0].children[0];
    const headlineContent = concept.children[1].children[0].children[0];
    const separatorContent = concept.children[1].children[0].children[1];
    const descriptionContent = concept.children[1].children[1];

    // Image Const
    const firstImage = image.children[0].children[0];
    const secondImage = image.children[1].children[0];
 
    // Remove init flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    // Information Animation
    tl.staggerFrom([fristHeaderInformation.children[0], secondHeaderInformation.children[0], thirdHeaderInformation.children[0]], 1, {
      y: 64,
      ease: Power3.easeOut,
    }, .15)
      .from(firstInformation, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, .6)
      .from(secondInformation, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, .8)
      .from(thirdInformation, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1)

    // Concept Animation
    gsap.from(imageContent, {x: -100, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: imageContent,
        start: 'top 80%',
        end: '+=300'
      }
    })
    gsap.from(headlineContent, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: separatorContent,
        start: 'top 80%',
        end: '+=300'
      }
    })
    gsap.from(separatorContent, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: descriptionContent,
        start: 'top 75%',
        end: '+=300'
      }
    })
    gsap.from(descriptionContent, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: descriptionContent,
        start: 'top 70%',
        end: '+=300'
      }
    })

    // Image Animation
    gsap.from(firstImage, {y: 500, ease: 'power3.out', duration: 1.2, scrollTrigger: {
        trigger: firstImage,
        start: 'top 140%',
        end: '+=300'
      }
    })
    gsap.from(secondImage, {y: 500, ease: 'power3.out', duration: 1.2, scrollTrigger: {
        trigger: secondImage,
        start: 'top 130%',
        end: '+=300'
      }
    })
    
  }, [tl]);

  return (
    <div>
      <Head>
        <title>Nicolas Diot | CoachMe</title>
        <meta name="description" content="CoachMe représente l'exercice final que nous devions créer à la fin de la formation en 
                    développement web à THP, The Hacking Project. " />
        <link rel="icon" href="../favicon-n.png" />
      </Head>

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
            <img className="top-bar__mail-logo" src="../logo_mail.png" alt="mail logo" />
          </a>
        </Link>
      </header>

      <div className="side-bar-left">
        {/* <a href="#">MENU</a> */}
      </div>

      <div className="side-bar-right">
        <Link href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/">
          <a target="_blank" rel="noreferrer">
            <img className="logo-social-linkedin" src="../logo_linkedin.png" alt="linkedin logo" />
          </a>
        </Link>
        <Link href="https://www.malt.fr/profile/nicolasdiot" >
          <a target="_blank" rel="noreferrer">
            <img className="logo-social" src="../logo_malt.png" alt="malt logo" />
          </a>
        </Link>
        <Link href="https://github.com/Scream10">
          <a target="_blank" rel="noreferrer">
            <img className="logo-social" src="../logo_github.png" alt="github logo" />
          </a>
        </Link>
      </div>

      <div className="bottom-bar"></div>

      <div className="project-banner">
        <div className="project-banner__content">
          <img src="../coachme-3.png" alt="coachme" />
          <div className="project-title">
            <h2>Coach Me</h2>
          </div>
        </div>
      </div>

      <div className="main-container main-container--project"  ref={el => app = el}>
        <div className="project-container">
          <div className="project-information" ref={el => information = el}>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Mon rôle</div>
              </div>
              <div>
                <div className="project-information__information">Développeur Back & Front</div>
                <div className="project-information__information">UI/UX Design</div>
              </div>
            </div>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Outils</div>
              </div>
              <div>
                <div className="project-information__information">HTML / CSS</div>
                <div className="project-information__information">Ruby</div>
                <div className="project-information__information">Ruby on Rails</div>
                <div className="project-information__information">Stripe</div>
              </div>
            </div>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Site</div>
              </div>
              <div className="project-information__information">
                <Link href="http://coachme.herokuapp.com/" >
                  <a target="_blank" rel="noreferrer">
                    <img src="../logo-chain.png" alt="logo lien site" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="project-concept" ref={el => concept = el}>
              <div className="project-concept__img">
                <img src="../projet-coachme.png" alt="projet coachme" />
              </div>
              <div className="project-concept__content">
                <div className="main-headline main-headline--left">
                  <h1 className="main-headline__headline main-headline__headline--small">Concept</h1>
                  <div className="main-headline__separator"></div>
                </div>
                <div className="project-concept__info">
                  CoachMe représente l'exercice final que nous devions créer à la fin de la formation en 
                  développement web à THP, The Hacking Project. Avec 4 autres développeurs, nous 
                  avons créé le site CoachMe sur lequel j'étais principalement responsable de la partie UI/UX et front-end.
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="project-img" ref={el => image = el}>
              <div>
                <img src="../coachme-1.png" alt="projet coachme" className="project-img project-img--1" />
              </div>
              <div>
                <img src="../coachme-2.png" alt="projet coachme" className="project-img project-img--2" />
              </div>
            </div>
          </div>

          <div className="section">
            <div className="project-nav">
              <Link href="/projets/votregaragebois">
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="/projets/semioffice">
                <a className="project-nav__next">
                  <p>Projet suivant</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow next" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}