import Head from 'next/head';
import Link from 'next/link';

export default function CoachMe() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Semi Office</title>
        <meta name="description" content="Semi Office est le portfolio d'Antoine Chauvin, un designer d'objets et d'espaces travaillant
                    à Paris et à Marseille."/>
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
        <img src="../ac-studio-1.png" alt="projet semi office" />
        <div className="project-title">
          <h2>Semi Office</h2>
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
              <div className="project-information__information">Ruby</div>
              <div className="project-information__information">Ruby on Rails</div>
              <div className="project-information__information">Javascript</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Site</div>
              <div className="project-information__information">
                <Link href="http://www.semi-office.eu/">
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
                  <img src="../projet-SEMIOFFICE.png" alt="projet semi office" />
                </div>
                <div className="project-concept__content">
                  <div className="main-headline main-headline--left">
                    <h1 className="main-headline__headline main-headline__headline--small">Concept</h1>
                    <div className="main-headline__separator"></div>
                  </div>
                  <div className="project-concept__info">
                    Semi Office est le portfolio d'Antoine Chauvin, un designer d'objets et d'espaces travaillant
                    à Paris et à Marseille. Le site a été pensé comment étant une galerie où l'on parcours les différents 
                    projets qu'Antoine réalise depuis plusieurs années.
                  </div>
                </div>
              </div>
          </div>

          <div className="section">
            <div className="project-img">
              <img src="../ac-studio-1.png" alt="projet semi office" className="project-img" />
              <img src="../ac-studio-2.png" alt="projet semi office" className="project-img project-img--2" />
            </div>
          </div>

          <div className="section">
            <div className="project-nav">
              <Link href="/projets/coachme">
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="/projets/ombelinedurey">
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