import React, { FC, JSX } from 'react';
import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

const App: FC = ():JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Home />
    </div>
  )
}

export default App;
