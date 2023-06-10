import { useState } from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';

export const ButtonEdit = ({ isEdit, setIsEdit, setTasks, selectedCard, setSelectedCard, editedTask, card }) => {

    const dataTask = JSON.parse(localStorage.getItem('dataTask'));
    const [indexGroup, setIndexGroup] = useState(0);

    const handleClick = () => {
        setIsEdit(true);
    }

    useEffect(() => {
        Object.values(dataTask).forEach((item, index) => {
            const checkCard = item.issues.find(item => item.id === +card.id);
            if (checkCard !== undefined) {
                setIndexGroup(index);
            }
        });
    }, []);

    const EditCard = () => {
        let newIssues = dataTask[indexGroup].issues.filter(item => item.id !== +card.id);
        const issuesItem = {
            ...selectedCard,
            description: editedTask,
        }
        newIssues.push(issuesItem);
        setSelectedCard(issuesItem);

        setTasks(tasks => ({
            ...tasks,
            [indexGroup]: {
                title: dataTask[indexGroup].title,
                issues: newIssues,
            }
        }));
        setIsEdit(false);
    }

    return (
        <button
            className={isEdit ? styles.submit : styles.button}
            onClick={isEdit ? EditCard : handleClick}
        >
            {
                isEdit ? "Save Card" : "Edit Card"
            }
        </button>
    );
};