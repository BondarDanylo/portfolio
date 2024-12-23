import React, { FC, JSX } from 'react';
import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';

const App: FC = ():JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
    </div>
  )
}

export default App;
