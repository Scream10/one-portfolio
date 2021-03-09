import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Portfolio</title>
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
          <img className="top-bar__mail-logo" src="logo_mail.png" alt="mail logo" />
        </a>
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
          {/* <img src="#" alt="main logo" /> */}
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
            <h2 className="main-headline__headline">Développement web et intégration</h2>
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
                <a href="/projets/coachme" className="btn-content">Découvrir</a>
              </div>
            </div>
            <div className="case-container-img">
              <img src="projet-coachme.png" alt="projet coachme" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-AC.png" alt="projet semi-office" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">Developpement back & front</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline">Semi Office :<br/> Portfolio de designer</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <a href="/projets/semi-office" className="btn-content">Découvrir</a>
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
                <a href="#" className="btn-content">Découvrir</a>
              </div>
            </div>
            <div className="case-container-img">
              <img src="projet-ombelinedurey.png" alt="projet ombeline durey" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-AC.png" alt="projet semi-office" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">refonte, wordpress</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline main-headline__headline--small">UCHF :<br/> Union des Consuls Honoraire de France</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <a href="#" className="btn-content">Découvrir</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-content">
              <div className="light-header">wordPress, responsive design</div>
              <div className="main-headline">
                <h1 className="main-headline__headline main-headline__headline--right-aligned">Multi Gaz Sensor :<br/> Site produit médicale</h1>
                <div className="main-headline__separator main-headline__separator--right"></div>
              </div>
              <div className="btn-container">
                <div className="btn-bg"></div>
                <a href="#" className="btn-content">Découvrir</a>
              </div>
            </div>
            <div className="case-container-img">
              <img src="projet-ombelinedurey.png" alt="projet ombeline durey" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-img">
              <img src="projet-AC.png" alt="projet semi-office" />
            </div>
            <div className="case-container-content">
              <div className="light-header light-header--left">wordpress, responsive design</div>
              <div className="main-headline main-headline--left">
                <h1 className="main-headline__headline main-headline__headline--small">Partelec :<br/> Site entreprise médicale</h1>
                <div className="main-headline__separator"></div>
              </div>
              <div className="btn-container btn-container--left">
                <div className="btn-bg"></div>
                <a href="#" className="btn-content">Découvrir</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="case-container">
            <div className="case-container-content">
              <div className="light-header">integration, bootstrap</div>
              <div className="main-headline">
                <h1 className="main-headline__headline main-headline__headline--right-aligned">Votre Garage Bois :<br/> Intégration d'une maquette</h1>
                <div className="main-headline__separator main-headline__separator--right"></div>
              </div>
              <div className="btn-container">
                <div className="btn-bg"></div>
                <a href="#" className="btn-content">Découvrir</a>
              </div>
            </div>
            <div className="case-container-img">
              <img src="projet-ombelinedurey.png" alt="projet ombeline durey" />
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
          <a href="mailto:nicolasdiot10@gmail.com?subject=Travaillons ensemble !" className="contact-container">
            <div className="p-contact">nicolasdiot10@gmail.com</div>
            <div className="contact-email-underline"></div>
          </a>
        </div>

        <footer>
          <a href="#">mentions legales</a>
        </footer>

      </div>
    </div>
  )
}
