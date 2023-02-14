import styles from './Column.module.scss'
import Card from '../Card/Card.js'
import CardForm from "../CardForm/CardForm.js";
import {useSelector} from "react-redux";
import { getFilteredCards } from '../../redux/cardsRedux';


const Column = ({id, icon, title})  => {

    const cards = useSelector(state => getFilteredCards(state, id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + icon} />
                {title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} isFavorite= {card.isFavorite} />)}
            </ul>
            <CardForm columnId={id} />
        </article>

    )};

export default Column;