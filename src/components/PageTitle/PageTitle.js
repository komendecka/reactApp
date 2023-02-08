import Container from "../Container/Container";
import styles from './PageTitle.module.scss'

const PageTitle = ({children}) => {
    return (
        <main>
            <Container>
                <h2 className={styles.title}>{ children }</h2>
            </Container>
        </main>
    );
};

export default PageTitle;