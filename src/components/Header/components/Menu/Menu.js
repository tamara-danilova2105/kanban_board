import styles from './styles.module.css';

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            {
                ['Profile', 'Log Out'].map((item, index) => (
                    <button className={styles.button} key={index}>{item}</button>
                ))
            }
        </nav>
    );
};