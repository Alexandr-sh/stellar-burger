import React, { useEffect } from 'react';
import styles from './App.module.css';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

const url = 'https://norma.nomoreparties.space/api/ingredients';

/*class App extends React.Component {
    render() {
      return <div className={ `${styles.App} text text_type_main-default` }>
          <AppHeader />
          <div className={styles.content}>
            <BurgerIngredients />
          </div>
      </div>;
    }
} */

function checkApiError(res) {
  if (res.ok) {
    return res;
  }
  return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

const App = () => {
  const [state, setState] = React.useState({
    dataB: null,
    loading: true
  })

  useEffect(() => {
    const getProductData = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => checkApiError(res));
      const data = await res.json();
      setState({ dataB: data.data, loading: false });
    }
    getProductData();
  },[])

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        <BurgerIngredients data = {state.dataB}/>
      </div>
    </div>
  )
}

export default App;