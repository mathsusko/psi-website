import { NavLink } from 'react-router-dom'; // Use NavLink ao invés de Link
import styles from './Header.module.css';
import psiLogo from "../assets/logo.png";
import { Button } from './Button';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.image}>
                <img src={psiLogo} alt="logotipo da psi" />
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>Início</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => isActive ? styles.active : undefined}>Serviços</NavLink></li>
                    <li><NavLink to="/who-we-are" className={({ isActive }) => isActive ? styles.active : undefined}>Quem Somos</NavLink></li>
                    <li><NavLink to="/budget" className={({ isActive }) => isActive ? styles.active : undefined}>Orçamento</NavLink></li>
                    <li><NavLink to="/clients" className={({ isActive }) => isActive ? styles.active : undefined}>Clientes</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined}>Contato</NavLink></li>
                </ul>
            </nav>
            <div className={styles.button}>
                <Button />
            </div>
        </header>
    );
}
