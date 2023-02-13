import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFliteredFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const favoriteCards = useSelector(getFliteredFavoriteCards);
    if(favoriteCards.length === 0) {
        return (
            <div className={styles.favorite}>
                <PageTitle>Favorite</PageTitle>
                <p className={styles.favorite_subtitle}>No Cards</p>
            </div>
        )
    }

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} {...card} isFavorite={card.isFavorite} />)}
            </ul>
        </div>
    )
};

export default Favorite;
