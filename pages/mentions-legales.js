import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolas Diot | Mentions Légales</title>
        <link rel="icon" href="../favicon-n.png" />
      </Head>

      <div className="home-animation--bg"></div>
      <div className="home-animation"></div>

      <header className="top-bar">
        <Link href="/">
          <a className="top-bar__logo">NICOLAS / DIOT</a>
        </Link>
        <Link href="mailto:nicolasdiot10@gmail.com?subject=Travaillons ensemble !">
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
        {/* <a href="#">MENU</a> */}
      </div>

      <div className="side-bar-right">
        <Link href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/">
          <a target="_blank">
            <img className="logo-social-linkedin" src="logo_linkedin.png" alt="linkedin logo" />
          </a>
        </Link>
        <Link href="https://www.malt.fr/profile/nicolasdiot" >
          <a target="_blank">
            <img className="logo-social" src="logo_malt.png" alt="malt logo" />
          </a>
        </Link>
        <Link href="https://github.com/Scream10">
          <a target="_blank">
            <img className="logo-social" src="logo_github.png" alt="github logo" />
          </a>
        </Link>
      </div>

      <div className="bottom-bar"></div>

      <div className="main-container">
          <div className="section">
            <div id="section-legal">
                <div className="section-title">
                <p>MENTIONS LÉGALES</p>
                </div>
                <div className="separator-dashes">
                <div className="separator-dash-line"></div>
                <div className="separator-dash-line"></div>
                <div className="separator-dash-line"></div>
                </div>
            </div>

            <div className="p-legal">
              Nicolas Diot<br />
              Troyes 10000, 
              France<br />
              <br />
              nicolasdiot10@gmail.com<br />
              <br />
              <strong>Contact</strong><br />
              Pour toute remarque sur le fonctionnement du site, écrivez à l’administrateur du site à partir de la rubrique « nous contacter » de ce site.<br />
              <br />
              <strong>Droits d’auteur – Copyright</strong><br />
              L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support, quel qu’il soit, est formellement interdite sauf autorisation expresse de Nicolas Diot.<br />
              <br />
              <strong>Conditions d'utilisation</strong><br />
              Le site met en œuvre tous les moyens dont il dispose, pour assurer une information fiable et une mise à jour fiable. Toutefois, 
              des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations, et signaler toutes
              modifications du site qu'il jugerait utile. Le site n'est en aucun cas responsable de l'utilisation faite de ces informations, et
              de tout préjudice direct ou indirect pouvant en découler.<br />
            </div>
            
          </div>
      </div>

    </div>
    
  )
}
