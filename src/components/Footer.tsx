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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contatos</a>
                </li>
                <li>
                  <a href="#">Quem somos</a>
                </li>
                <li>
                  <a href="#">Clientes</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
            <div className={styles.link}>
              <p>Social</p>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div className={styles.link}>
              <p>Transparência</p>
              <ul>
                <li>
                  <a href="#">Política e Privacidade</a>
                </li>
                <li>
                  <a href="#">Termos e serviços</a>
                </li>
              </ul>
            </div>
            <div className={styles.link}>
              <p>Contato</p>
              <div className={styles.contato}>
                <div>
                  <h2>Número</h2>
                  <p>(41) 9 9743-0276</p>
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
