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
                  <a href="/">Página Inicial</a>
                </li>
                <li>
                  <a href="/contact">Contatos</a>
                </li>
                <li>
                  <a href="/who-we-are">Quem somos</a>
                </li>
                <li>
                  <a href="/clients">Clientes</a>
                </li>
                <li>
                  <a href="/contact">Contato</a>
                </li>
              </ul>
            </div>

            <div className={styles.link}>
              <p>Social</p>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>

            <div className={styles.link}>
              <p>Contato</p>
              <div className={styles.contato}>
                <div>
                  <span>Celson</span>
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
