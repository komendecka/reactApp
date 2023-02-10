import styles from './Card.module.scss';
import { toggleCard } from '../../redux/store';
import { useDispatch } from 'react-redux';
import  clsx  from 'clsx';


const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch(toggleCard(id, isFavorite))
    };
    return (
        <li className={styles.card}>{title}
            <div>
                <button onClick={toggleFavorite} className={clsx(styles.star_btn, isFavorite && styles.active)}>
                    <span className='fa fa-star-o'></span>
                </button>
            </div>
        </li>
    );
};

export default Card;