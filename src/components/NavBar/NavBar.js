import Container from "../Container/Container.js";
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.nav_container}>
                    <a href='/' className={styles.nav_icon}>
                        <i className='fa fa-tasks'/>
                    </a>
                    <ul className={styles.nav_links}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>


                    </ul>
                </div>
            </Container>
        </nav>
)};

export default NavBar;