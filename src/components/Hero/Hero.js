import styles from './Hero.module.scss';
import PageTitle from "../PageTitle/PageTitle";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>My first React App</h1>
            <PageTitle className={styles.subtitle}>A simple to-do app, with lists, columns and card</PageTitle>
        </div>
    );
};

export default Hero;