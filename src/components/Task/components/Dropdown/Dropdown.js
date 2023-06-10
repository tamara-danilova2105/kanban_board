import { useState } from 'react';
import styles from './styles.module.css';

export const Dropdown = ({ listTask, index, setTasks, setShowElement }) => {

    const [showOption, setShowOption] = useState(false);

    const handleDropdown = id => {
        const modificadListTask = listTask[index - 1].issues.filter(task => task.id !== +id);
        const selectedTask = listTask[index - 1].issues.filter(task => task.id === +id);

        setTasks(tasks => ({
            ...tasks,
            [index - 1]: {
                title: listTask[index - 1].title,
                issues: modificadListTask,
            },
            [index]: {
                title: listTask[index].title,
                issues: [
                    ...listTask[index].issues,
                    selectedTask[0],
                ]
            }
        }))
        setShowElement(false);
    };

    return (
        <div>
            <div
                className={styles.select}
                onClick={() => setShowOption(true)}
            >
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.5L11 13L19 0.5" stroke="black" />
                </svg>
            </div>
            <div className={styles.position}>
                {
                    showOption &&
                    <div className={styles.container_option}>
                        {
                            listTask[index - 1].issues.map(task => (
                                <button
                                    key={task.id}
                                    value={task.id}
                                    className={styles.option}
                                    onClick={(e) => handleDropdown(e.target.value)}

                                >
                                    {task.name}
                                </button>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};