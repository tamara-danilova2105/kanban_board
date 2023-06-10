import styles from './styles.module.css';

export const ButtonAddInput = ({ setShowElement, textEntered, addTask }) => {

    const handleClick = () => {
        setShowElement(true);
        textEntered && addTask();
    };

    return (
        <button
            className={textEntered ? styles.submit : styles.button}
            onClick={handleClick}
        >
            {textEntered ? 'Submit' : '+ Add card'}
        </button>
    );
};