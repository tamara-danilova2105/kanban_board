import { Task } from '../../Task/model/Task';
import styles from './styles.module.css';

export const Main = ({ tasks, setTasks }) => {

  return (
    <main className={styles.main}>
      {
        Object.values(tasks).map((item, index) => (
          <Task
            key={index}
            item={item}
            index={index}
            setTasks={setTasks}
            tasksDropdown={Object.keys(tasks).map(key => {
              return tasks[key];
            })}
          />
        ))
      }
    </main>
  );
};
