import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="top-bar">
        <a href="#" className="top-bar__logo">NICOLAS / DIOT</a>
        <div>
          <a href="#" className="top-bar__mail">CONTACTEZ MOI</a>
          <img className="top-bar__mail-logo" src="logo_mail.png" alt="mail logo" />
        </div>
      </header>

      <div className="side-bar-left">
        {/* <a href="#">MENU</a> */}
      </div>

      <div className="side-bar-right">
        <a href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/" target="_blank">
          <img className="logo-social-linkedin" src="logo_linkedin.png" alt="linkedin logo" />
        </a>
        <a href="https://www.malt.fr/profile/nicolasdiot" target="_blank">
          <img className="logo-social" src="logo_malt.png" alt="malt logo" />
        </a>
        <a href="https://github.com/Scream10" target="_blank">
          <img className="logo-social" src="logo_github.png" alt="github logo" />
        </a>
      </div>

      <div className="bottom-bar"></div>

      <div className="main-container">
        <div className="home-hero">
          <img src="#" alt="main logo" />
        </div>

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
              <div className="main-headline">
                <h1 className="main-headline__headline">Nicolas Diot, Développeur Front et Intégrateur basé à Troyes et à Paris.</h1>
                <div className="main-headline__separator"></div>
              </div>
              <p className="p-large"><span className="text-span-24">My goal is to help people build better and more meaningful products.</span> With a strong background in UX & UI design, I make use of iterative hands-on processes and follow a human-centric design approach. My work ranges from strategic planning and rough prototyping in the early stages, to creating a strong visual design language, all of which increases the value of both the brand and the product.</p>
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
            <h2 className="main-headline__headline">Intégration, responsive et référencement</h2>
            <div className="main-headline__separator main-headline__separator--center"></div>
          </div>

          <div className="row">
          <div className="skills">
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
                <p className="skill-bullet">Maquette UI/UX</p>
                <p className="skill-bullet">Intégration</p>
              </div>
              <div className="skill">
                <div className="skill-img">
                  <img src="undraw_maintenance_cn7j.png" alt="logo maintenance" />
                </div>
                <h3 className="skill-title">Maintenance</h3>
                <p className="skill-bullet">SEO</p>
                <p className="skill-bullet">Mise à jour</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
