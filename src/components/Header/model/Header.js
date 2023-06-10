import { useState } from 'react';
import { Auth } from '../components/Auth/Auth';
import { Menu } from '../components/Menu/Menu';
import styles from './styles.module.css';

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Awesome Kanban Board</h1>
      <Auth
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={isOpen ? `${styles.open} ${styles.window}` : `${styles.window}`}/>
      <div className={isOpen ? `${styles.open} ${styles.div}` : `${styles.div}`}>
        <Menu/>
      </div>
    </header>
  );
};
