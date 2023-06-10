import styles from './styles.module.css';

export const Textarea = ({ setEditedTask }) => {

    const handleTextarea = e => {
        setEditedTask(e.target.value);
    };

    return (
        <textarea
            className={styles.textarea}
            onChange={handleTextarea}
            autofocus
        />
    );
};