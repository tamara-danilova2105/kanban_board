import styles from './styles.module.css';

export const Input = ({ setTextTask, setTextEntered }) => {

    const handleInput = e => {
        const text = e.target.value;
        setTextTask(text);
        setTextEntered(text.length > 0 ? true : false);
    };

    return (
        <input
            className={styles.input} 
            placeholder='Enter task...'
            onChange={handleInput}
        />
    );
};