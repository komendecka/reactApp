import styles from './ListForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button.js'
import TextInput from "../TextInput/TextInput.js";
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = ({listId}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId }));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span> Title: </span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <span> Description: </span>
            <TextInput value={description} onChange={e => setDescription(e.target.value)}/>
            <Button type='submit'>Add List</Button>
        </form>
    );
};

export default ListForm;