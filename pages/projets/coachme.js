import Head from 'next/head'

export default function CoachMe() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | CoachMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home-animation--bg"></div>
      <div className="home-animation"></div>

      <header className="top-bar">
        <a href="/" className="top-bar__logo">NICOLAS / DIOT</a>
        <a href="mailto:nicolasdiot10@gmail.com?subject=Travaillons ensemble !" className="top-bar-info">
          <div className="top-bar__mail">
            <div>CONTACTEZ MOI</div>
            <div className="top-bar__mail-underline"></div>
          </div>
          <img className="top-bar__mail-logo" src="../logo_mail.png" alt="mail logo" />
        </a>
      </header>

      <div className="side-bar-left">
        {/* <a href="#">MENU</a> */}
      </div>

      <div className="side-bar-right">
        <a href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/" target="_blank">
          <img className="logo-social-linkedin" src="../logo_linkedin.png" alt="linkedin logo" />
        </a>
        <a href="https://www.malt.fr/profile/nicolasdiot" target="_blank">
          <img className="logo-social" src="../logo_malt.png" alt="malt logo" />
        </a>
        <a href="https://github.com/Scream10" target="_blank">
          <img className="logo-social" src="../logo_github.png" alt="github logo" />
        </a>
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
                <a href="http://coachme.herokuapp.com/" target="_blank">
                  <img src="../logo-chain.png" alt="logo lien site" />
                </a>
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
              <img src="../coachme-1.png" alt="projet coachme" className="project-img" />
              <img src="../coachme-2.png" alt="projet coachme" className="project-img project-img--2" />
            </div>
          </div>

          <div className="section"></div>
          <div className="section">

          </div>
          
        </div>
      </div>

    </div>
  )
}