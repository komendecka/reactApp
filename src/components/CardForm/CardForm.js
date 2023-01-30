import styles from './CardForm.module.scss';
import {useState} from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import List from "../List/List.js";

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.addCard({ title: title }, props.columnId);
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title}  onChange={e => setTitle(e.target.value)} />
            <Button>Add Card </Button>
        </form>
    );
};

export default CardForm;