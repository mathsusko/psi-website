import styles from './Footer.module.css'
import logo from '../assets/logo2.png'
export function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.body}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt=""
              
            />
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
                  <p>(41) 9 9999-9999</p>
                </div>
                <div>
                  <h2>E-mail</h2>
                  <p>contato@psi.com.br</p>
                </div>
              </div>
            </div>
            <div className={styles.map}>
            <p>Endereço</p>
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.519672985492!2d-46.6396026844543!3d-23.58669816830526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b3d313fefd%3A0x3f973e3d65b98c!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="140px"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
            <p>Rua Das flores, 999</p>
          </div>
          </div>

          
        </div>
      </div>
    </footer>
  )
}
