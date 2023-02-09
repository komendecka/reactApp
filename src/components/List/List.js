import styles from './List.module.scss';
import Column from './../Column/Column.js';
import ColumnForm from './../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getColumnsByList} from '../../redux/store';
import { useParams } from 'react-router';
import SearchForm from "../SearchForm/SearchForm";

const List = () => {

    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column}  />)}
            </section>
            <ColumnForm listId={listId} />
        </div>
    );
};

export default List;