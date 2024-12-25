import { FC, JSX } from 'react';
import { Route, Routes } from 'react-router';
import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import Stack from './pages/Stack/Stack';

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <Navigation />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App;
