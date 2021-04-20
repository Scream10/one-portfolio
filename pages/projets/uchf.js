import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MenuProjet from './menuprojets';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function Uchf() {

  let app = useRef(null);
  let image = useRef(null);
  let concept = useRef(null);
  let information = useRef(null);
  let mobile = useRef(null);
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

    // Mobile Const
    const imageMobile = mobile.children[1].children[0];
    const headlineMobile = mobile.children[0].children[0].children[0];
    const separatorMobile = mobile.children[0].children[0].children[1];
    const descriptionMobile = mobile.children[0].children[1];
 
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

    // Mobile Animation
    gsap.from(imageMobile, {x: -100, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: imageMobile,
        start: 'top 80%',
        end: '+=300'
      }
    })
    gsap.from(headlineMobile, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: separatorMobile,
        start: 'top 80%',
        end: '+=300'
      }
    })
    gsap.from(separatorMobile, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: descriptionMobile,
        start: 'top 75%',
        end: '+=300'
      }
    })
    gsap.from(descriptionMobile, {y: 20, opacity: 0, ease: 'power3.out', duration: 1, scrollTrigger: {
        trigger: descriptionMobile,
        start: 'top 70%',
        end: '+=300'
      }
    })
      
  }, [tl]);

  return (
    <div>
      <Head>
        <title>Nicolas Diot | UCHF</title>
        <meta name="description" content="Le site associatif de l'UCHF, Union des Consuls Honoraires de France, regroupe
                    toute l'actualité et les informations en lien avec le Consulat et les Consuls de France."/>
        <link rel="icon" href="../favicon-n.png" />
      </Head>

      <MenuProjet />

      <div className="project-banner">
        <div className="project-banner__content">
          <img src="../fond-uchf.png" alt="projet UCHF" id="fond-uchf" />
          <div className="project-title">
            <h2 className="text-center">Union des Consuls Honoraires<br /> de France</h2>
          </div>
        </div>
      </div>

      <div className="main-container main-container--project" ref={el => app = el}>
        <div className="project-container">
          <div className="project-information" ref={el => information = el}>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Mon rôle</div>
              </div>
              <div className="project-information__information">Développeur Back & Front</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Outils</div>
              </div>
              <div>
                <div className="project-information__information">HTML / CSS</div>
                <div className="project-information__information">WordPress</div>
              </div>
            </div>
            <div className="project-information__content">
              <div className="project-information__container-header">
                <div className="project-information__header">Site</div>
              </div>
              <div className="project-information__information">
                <Link href="https://uchf.wordpress.com/">
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
                  <img src="../projet-UNIONCONSUL.png" alt="projet UCHF" />
                </div>
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Concept</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    Le site associatif de l'UCHF, Union des Consuls Honoraires de France, regroupe
                    toute l'actualité et les informations en lien avec le Consulat et les Consuls de France.
                    Pour ce client, j'ai réalisé une refonte d'un site existant et ajouté de nouvelles fonctionnalités.
                  </div>
                </div>
              </div>
          </div>

          <div className="section">
            <div className="project-img" ref={el => image = el}>
              <div>
                <img src="../fond-uchf.png" alt="projet uchf" className="project-img project-img--1" />
              </div>
              <div>
                <img src="../fond-uchf-2.png" alt="projet uchf" className="project-img project-img--2" />
              </div>
            </div>
          </div>

          <div className="section section--mobile">
            <div className="project-concept project-concept--mobile" ref={el => mobile = el}>
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Version mobile</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    Le site est réalisé avec WordPress ce qui facilite l'accessibilité en version mobile.
                    Et cela permet de booster la présence de l'entreprise sur le web !
                  </div>
                </div>
                <div className="project-concept__img project-concept__img--mobile">
                <img src="../iphone-CONSUL.png" alt="projet ombelinedurey" />
                </div>
              </div>
          </div>

          <div className="section section--mobileTop">
            <div className="project-nav">
              <Link href="/projets/ombelinedurey">
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="/projets/multigazsensor">
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