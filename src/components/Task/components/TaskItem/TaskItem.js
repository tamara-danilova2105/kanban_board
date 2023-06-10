import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const TaskItem = ({ task }) => {

    return (
        <div className={styles.task}>
            <Link
                className={styles.link}
                to={`/tasks/${task.id}`}
            >
                {task.name}
            </Link>
        </div>
    );
};