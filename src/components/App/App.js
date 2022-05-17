import React, { useEffect } from 'react';
import styles from './App.module.css';

import Modal from '../Modal/Modal';


import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
const url = 'https://norma.nomoreparties.space/api/ingredients';

const IngredientModal = Modal(IngredientDetails);

const defaultBun = "60666c42cc7b410027a1a9b5";

function checkApiError(res) {
  if (res.ok) {
    return res;
  }
  return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

const App = () => {
  const [state, setState] = React.useState({
    dataB: null,
    loading: true,
    bun: "60666c42cc7b410027a1a9b5"
  })

  useEffect(() => {
    const getProductData = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => checkApiError(res))
      const serverData = await res.json();
      setState({ dataB: serverData.data, loading: false, bun: defaultBun});
    }
    getProductData();
  }, [])

  const addIngridient = (id) => {
    const newData = [...state.dataB];
    newData.forEach((item) => {
      if (item._id === id) item.__v +=1;
    })
    setState({dataB:newData, bun:state.bun});
  }

  const selectBun = (id) => {
    setState({bun: "60666c42cc7b410027a1a9b2"})
  }

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        {!state.loading && <BurgerIngredients data={state.dataB} addIngridient = {addIngridient}/>}
        {!state.loading && <BurgerConstructor data={state.dataB} />}
      </div>
    </div>
  )
}

export default App;