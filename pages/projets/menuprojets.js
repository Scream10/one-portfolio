import Link from 'next/link';
import { useState } from 'react';

export default function MenuProjet() {

  const [navigation, setNavigation] = useState(false);
  const showNavigation = () => setNavigation(!navigation);

  return (
    <>
      <header className={navigation ? 'top-bar active-vertical-100 active-top-bar' : 'top-bar'}>
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

      <div className="menu-hide">
        <div className="menu-container">
          <Link href='#'>
            <a className={navigation ? 'menu--close' : 'menu'} onClick={showNavigation}>
              <div className="menu__lines">
                <div className="menu__line menu__line--top"></div>
                <div className="menu__line menu__line--center"></div>
                <div className="menu__line menu__line--bottom"></div>
              </div>
              <div className={navigation ? 'menu__letters--close' : 'menu__letters'}>
                <div className="menu__letter menu__letter--u">u</div>
                <div className="menu__letter menu__letter--n">n</div>
                <div className="menu__letter menu__letter--e">e</div>
                <div className="menu__letter menu__letter--m">m</div>
              </div>
            </a>
          </Link>
        </div>

        <div className={navigation ? 'side-bar-left active-horizontal-100' : 'side-bar-left'}></div>

        <div className={navigation ? 'navigation-container active' : 'navigation-container'}>
          <div className="navigation">
            <Link href="/projets/coachme">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">Coach Me</span>
                </span>
                <span className="navigation__item--sub">Sport & coach</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/projets/semioffice">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">Semi Office</span>
                </span>
                <span className="navigation__item--sub">Portfolio design</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/projets/ombelinedurey">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">Ombeline Durey</span>
                </span>
                <span className="navigation__item--sub">Digital Marketing</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/projets/uchf">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">UCHF</span>
                </span>
                <span className="navigation__item--sub">Union des Consuls Honoraires de France</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/projets/multigazsensor">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">Multi Gaz Sensor</span>
                </span>
                <span className="navigation__item--sub">Produits Médicales</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/projets/votregaragebois">
              <a className="navigation__item">
                <span className="navigation__item--text">
                  <span className="navigation__item--textinner">Votre Garage Bois</span>
                </span>
                <span className="navigation__item--sub">Intégration web</span>
                <div className="hover-reveal">
                  <div className="hover-reveal__inner">
                    <div className="hover-reveal__img"></div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className={navigation ? 'side-bar-right active-horizontal-100' : 'side-bar-right'}>
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

        <div className={navigation ? 'bottom-bar active-vertical-100' : 'bottom-bar'}></div>
      </div>
    </>
  )
}