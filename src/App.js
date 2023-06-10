import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/model/Footer';
import { Header } from './components/Header/model/Header';
import { Main } from './components/Main/model/Main';
import { Card } from './components/Card/model/Card';
import { dataMock } from '../src/data/dataMock';
import styles from './styles.module.css';

const App = () => {
  const dataTask = JSON.parse(localStorage.getItem('dataTask'));
  const [tasks, setTasks] = useState(dataTask === null ? dataMock : dataTask);

  useEffect(() => {
    localStorage.setItem('dataTask', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path='/' element={
            <Main
              tasks={tasks}
              setTasks={setTasks} />
          } />
          <Route path='/tasks/:id' element={
            <Card
              setTasks={setTasks}
            />
          } />
        </Routes>
        <Footer tasks={tasks} />
      </div>
    </Router>
  );
};

export default App;
