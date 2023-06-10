import styles from './styles.module.css';

export const ButtonAddDropdown = ({ showElement, setShowElement, length }) => {

    const handleClick = () => {
        setShowElement(true);
    };

    return (
        <>
            {
                !showElement && 
                <button
                    className={length === 0 ? styles.disabled : styles.button}
                    type='button'
                    onClick={handleClick}
                    disabled={length === 0 ? true : false}
                >
                    + Add card
                </button>
            }
        </>
    );
};