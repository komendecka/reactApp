import Container from "../Container/Container.js";
import styles from './NavBar.module.scss'


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.nav_container}>
                    <a href='/' className={styles.nav_icon}>
                        <i className='fa fa-tasks'/>
                    </a>
                    <ul className={styles.nav_links}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/favorite'>Favorite</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
)};

export default NavBar;