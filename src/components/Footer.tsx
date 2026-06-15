import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/logo2.png';
export function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.body}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <div className={styles.empresa}>
              <h2 className="text-base">PSI Prevencêndio</h2>
              <p className="text-sm">prevenção contra incêndio</p>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.link}>
              <p>Páginas</p>
              <ul>
                <li>
                  <Link to="/">Página Inicial</Link>
                </li>
                <li>
                  <Link to="/who-we-are">Quem somos</Link>
                </li>
                <li>
                  <Link to="/clients">Clientes</Link>
                </li>
                <li>
                  <Link to="/services">Serviços</Link>
                </li>
              </ul>
            </div>

            <div className={styles.link}>
              <p>Social</p>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/previncendiopsi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                {/* <li>
                  <a href="#">Facebook</a>
                </li> */}
              </ul>
            </div>

            <div className={styles.link}>
              <p>Contato</p>
              <div className={styles.contato}>
                <div>
                  <span>Celso</span>
                  <p>+55 (41) 99743-0178</p>
                  <br />
                  <span>Gustavo</span>
                  <p>+55 (41) 99912-6693</p>
                </div>
                <div>
                  <h2>E-mail</h2>
                  <p>contato@psi.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
