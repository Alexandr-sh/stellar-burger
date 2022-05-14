import React from 'react';
import styles from './App.module.css';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

class App extends React.Component {
    render() {
      return <div className={ `${styles.App} text text_type_main-default` }>
          <AppHeader />
          <div className={styles.content}>
            <BurgerIngredients />
          </div>
      </div>;
    }
} 

export default App;