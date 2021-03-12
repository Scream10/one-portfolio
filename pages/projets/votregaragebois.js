import Head from 'next/head';
import Link from 'next/link';

export default function CoachMe() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Votre Garage Bois</title>
        <meta name="description" content="Pour l'Agence Facton, j'ai réalisé l'intégration de la page d'accueil d'après une maquette.
                    L'intégration pour votre-garage-bois a été réalisé en HTML, CSS et Bootstrap." />
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
        <img src="../fond-vgb.png" alt="projet UCHF" id="fond-vgb" />
        <div className="project-title">
          <h2 className="text-center">Votre Garage Bois</h2>
        </div>
      </div>

      <div className="main-container main-container--project">
        <div className="project-container">
          <div className="project-information">
            <div className="project-information__content">
              <div className="project-information__header">Mon rôle</div>
              <div className="project-information__information">Intégrateur</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Outils</div>
              <div className="project-information__information">HTML / CSS</div>
              <div className="project-information__information">Bootstrap</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Site</div>
              <div className="project-information__information">
                <Link href="https://www.votre-garage-bois.fr/">
                  <a target="_blank" rel="noreferrer">
                    <img src="../logo-chain.png" alt="logo lien site" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="project-concept">
              <div className="project-concept__img">
                  <img src="../projet-GARAGEBOIS.png" alt="projet votre garage bois" />
                </div>
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Concept</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    Pour l'Agence Facton, j'ai réalisé l'intégration de la page d'accueil d'après une maquette Illustrator.
                    L'intégration a été réalisé en HTML, CSS et Bootstrap. Le site votre-garage-bois.fr est 
                    l'un des meilleurs dans son domaine en France.
                  </div>
                </div>
              </div>
          </div>

          <div className="section">
            <div className="project-img">
              <img src="../fond-vgb.png" alt="projet votre garage bois" className="project-img" />
              <img src="../fond-vgb-2.png" alt="projet votre garage bois" className="project-img project-img--2" />
            </div>
          </div>

          <div className="section section--mobile">
            <div className="project-concept project-concept--mobile">
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Version mobile</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    À l'aide de bootstrap le site est responsive design, c'est à dire qu'il s'adapte à tous les écrans,
                    ordinateur, tablette et téléphone. 
                  </div>
                </div>
                <div className="project-concept__img project-concept__img--mobile">
                <img src="../iphone-GARAGEBOIS.png" alt="projet votre garage bois" />
                </div>
              </div>
          </div>

          <div className="section section--mobileTop">
            <div className="project-nav">
              <Link href="/projets/multigazsensor">
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="/projets/coachme">
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