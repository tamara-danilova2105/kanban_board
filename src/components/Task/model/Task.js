import { useState } from 'react';
import { ButtonAddInput } from '../components/Input/ButtonAddInput';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { ButtonAddDropdown } from '../components/Dropdown/ButtonAddDropdown';
import styles from './styles.module.css';

export const Task = ({ item, index, setTasks, tasksDropdown }) => {

    const [showElement, setShowElement] = useState(false);
    const [textTask, setTextTask] = useState('');
    const [textEntered, setTextEntered] = useState(false);

    const addTask = () => {
        setTasks(tasks => ({
            ...tasks,
            [index]: {
                title: item.title,
                issues: [
                    ...item.issues,
                    ({
                        id: new Date().getTime(),
                        name: textTask,
                        description: '',
                    })
                ]
            }
        }));
        setShowElement(false);
        setTextEntered(false);
    };

    const addTaskShow = () => {
        if (index === 0) {
            return <Input
                setTextTask={setTextTask}
                setTextEntered={setTextEntered}
            />
        } else {
            return <Dropdown
                listTask={tasksDropdown}
                index={index}
                setTasks={setTasks}
                setShowElement={setShowElement}
            />
        };
    };

    const buttonShow = () => {
        if (index === 0) {
            return <ButtonAddInput
                addTask={addTask}
                textEntered={textEntered}
                setShowElement={setShowElement}
            />
        } else {
            return <ButtonAddDropdown
                showElement={showElement}
                setShowElement={setShowElement}
                length={tasksDropdown[index - 1].issues.length}
            />
        }
    }

    return (
        <section className={styles.section}>
            <p className={styles.title}>{item.title}</p>
            <div className={styles.scroll}>
                {
                    item.issues.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                        />
                    ))
                }
                {showElement && addTaskShow()}
                {buttonShow()}
            </div>
        </section>
    );
};
