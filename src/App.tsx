import { FC, JSX } from 'react';
import { Route, Routes } from 'react-router';
import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    </div>
  )
}

export default App;
