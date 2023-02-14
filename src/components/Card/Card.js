import styles from './Card.module.scss';
import { toggleCard, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import  clsx  from 'clsx';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch(toggleCard(id, isFavorite))
    };

    const removedCard =() => {
        dispatch(removeCard(id))
    };

    return (
        <li className={styles.card}>{title}
            <div>
                <button onClick={toggleFavorite} className={clsx(styles.star_btn, isFavorite && styles.active)}>
                    <span className='fa fa-star-o'></span>
                </button>
                <button type="button" onClick={removedCard} className={styles.bin_btn}>
                    <span className='fa fa-trash'></span>
                </button>
            </div>
        </li>
    );
};

export default Card;