import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { ButtonEdit } from '../componens/ButtonEdit/ButtonEdit';
import { useCallback, useEffect, useState } from 'react';
import { Textarea } from '../componens/Textarea/Textarea';

export const Card = ({ setTasks }) => {

    const card = useParams();
    const dataTask = JSON.parse(localStorage.getItem('dataTask'));
    const [selectedCard, setSelectedCard] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [editedTask, setEditedTask] = useState();

    const getSelectedCard = useCallback(() => {
        Object.values(dataTask).forEach(item => {
            const checkCard = item.issues.find(item => item.id === +card.id);
            if (checkCard !== undefined) {
                setSelectedCard(checkCard);
            }
        });
    }, []);

    useEffect(() => {
        getSelectedCard();
    }, [getSelectedCard]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {
                    selectedCard &&
                    <div>
                        <h3 className={styles.header}>
                            {selectedCard.name}
                        </h3>
                        <div>
                            {
                                isEdit
                                    ? <Textarea
                                        setEditedTask={setEditedTask}
                                    />
                                    : <p className={styles.par}>
                                        {
                                            selectedCard.description.length === 0
                                                ? "This task has not description"
                                                : selectedCard.description
                                        }
                                    </p>
                            }
                        </div>
                        <ButtonEdit
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            setTasks={setTasks}
                            selectedCard={selectedCard}
                            setSelectedCard={setSelectedCard}
                            editedTask={editedTask}
                            card={card}
                        />
                    </div>
                }
                <Link to='/'>
                    <svg className={styles.svg} width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 39C42.1111 40.1852 42.1111 41.8148 43 43C41.8148 42.1111 40.1852 42.1111 39 43C39.8889 41.8148 39.8889 40.1852 39 39C40.1852 39.8889 41.8148 39.8889 43 39Z" fill="#000000" />
                        <path d="M27.5 54.5L39 43M54.5 27.5L43 39M54.5 54.5L43 43M27.5 27.5L39 39M39 39V39C39.8889 40.1852 39.8889 41.8148 39 43V43M39 39V39C40.1852 39.8889 41.8148 39.8889 43 39V39M43 39V39C42.1111 40.1852 42.1111 41.8148 43 43V43M43 43V43C41.8148 42.1111 40.1852 42.1111 39 43V43" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};