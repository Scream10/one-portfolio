import Head from 'next/head';
import Link from 'next/link';

export default function CoachMe() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | CoachMe</title>
        <meta description="CoachMe représente l'exercice final que nous devions créer à la fin de la formation en 
                    développement web à THP, The Hacking Project. " />
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
        <img src="../coachme-3.png" alt="coachme" />
        <div className="project-title">
          <h2>Coach Me</h2>
        </div>
      </div>

      <div className="main-container main-container--project">
        <div className="project-container">
          <div className="project-information">
            <div className="project-information__content">
              <div className="project-information__header">Mon rôle</div>
              <div className="project-information__information">Développeur Back & Front</div>
              <div className="project-information__information">UI/UX Design</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Outils</div>
              <div className="project-information__information">HTML / CSS</div>
              <div className="project-information__information">Ruby</div>
              <div className="project-information__information">Ruby on Rails</div>
              <div className="project-information__information">Stripe</div>
            </div>
            <div className="project-information__content">
              <div className="project-information__header">Site</div>
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
            <div className="project-concept">
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
            <div className="project-img">
              <img src="../coachme-1.png" alt="projet coachme" className="project-img" />
              <img src="../coachme-2.png" alt="projet coachme" className="project-img project-img--2" />
            </div>
          </div>

          <div className="section"></div>
          <div className="section">
            <div className="project-nav">
              <Link href="../projets/votregaragebois">
                <a className="project-nav__prev">
                  <p>Projet précédent</p>
                  <img src="../logo-arrow-down.png" alt="logo arrow prev" />
                </a>
              </Link>
              <Link href="../projets/semioffice">
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