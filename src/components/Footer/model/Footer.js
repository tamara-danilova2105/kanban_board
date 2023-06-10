import styles from './styles.module.css';

export const Footer = ({ tasks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_task}>
        <p>Active task: {tasks[0].issues.length}</p>
        <p>Finished task: {tasks[3].issues.length}</p>
      </div>
      <div className={styles.info_author}>
        <p>Kanban board by Maria Sereda, 2023</p>
      </div>
    </footer>
  );
};
