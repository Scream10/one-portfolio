import Head from 'next/head';
import Link from 'next/link';

export default function CoachMe() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Multi Gaz Sensor</title>
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
          <a target="_blank">
            <img className="logo-social-linkedin" src="../logo_linkedin.png" alt="linkedin logo" />
          </a>
        </Link>
        <Link href="https://www.malt.fr/profile/nicolasdiot" >
          <a target="_blank">
            <img className="logo-social" src="../logo_malt.png" alt="malt logo" />
          </a>
        </Link>
        <Link href="https://github.com/Scream10">
          <a target="_blank">
            <img className="logo-social" src="../logo_github.png" alt="github logo" />
          </a>
        </Link>
      </div>

      <div className="bottom-bar"></div>

      <div className="project-banner">
        <img src="../fond-multi.png" alt="projet UCHF" id="fond-multi" />
        <div className="project-title">
          <h2 className="text-center">Multi Gaz Sensor</h2>
        </div>
      </div>

      <div className="main-container main-container--project">
        <div className="project-container">
          <div className="project-information">
            <div className="project-information__content">
              <div className="project-information__header">Mon rôle</div>
              <div className="project-information__information">Développeur Back & Front</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Outils</div>
              <div className="project-information__information">HTML / CSS</div>
              <div className="project-information__information">WordPress</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Site</div>
              <div className="project-information__information">
                <Link href="http://multi-gaz-sensor.com/">
                  <a target="_blank">
                    <img src="../logo-chain.png" alt="logo lien site" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="project-concept">
              <div className="project-concept__img">
                  <img src="../projet-MULTI.png" alt="projet multi gaz sensor" />
                </div>
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Concept</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
          </div>

          <div className="section">
            <div className="project-img">
              <img src="../fond-multi.png" alt="projet multi gaz sensor" className="project-img" />
              <img src="../fond-multi-2.png" alt="projet multi gaz sensor" className="project-img project-img--2" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit.
                  </div>
                </div>
                <div className="project-concept__img project-concept__img--mobile">
                <img src="../iphone-MULTI.png" alt="projet multi gaz sensor" />
                </div>
              </div>
          </div>

          <div className="section section--mobileTop">
            <div className="project-nav">
              <Link href="../projets/uchf" >
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="../projets/votregaragebois">
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