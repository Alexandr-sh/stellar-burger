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

const initiaIngridientData = {
    "_id":"60666c42cc7b410027a1a9b5",
    "name":"Говяжий метеорит (отбивная)",
    "type":"main",
    "proteins":800,
    "fat":800,
    "carbohydrates":300,
    "calories":2674,
    "price":3000,
    "image":"https://code.s3.yandex.net/react/code/meat-04.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
    "__v":0
   };

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
      setState({ dataB: serverData.data, loading: false, selectedIngridient: initiaIngridientData, isIngridientOpen: false});
    }
    getProductData();
  }, [])

  const addIngridient = (data) => {
    const newData = [...state.dataB];
    newData.forEach((item) => {
      if (item._id === data._id) item.__v +=1;
    })
    setState({dataB:newData, selectedIngridient: data, isIngridientOpen: true});
  }

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        {!state.loading && <BurgerIngredients data={state.dataB} addIngridient = {addIngridient}/>}
        {!state.loading && <BurgerConstructor data={state.dataB} />}
      </div>
      {!state.loading && <IngredientModal data = {state.selectedIngridient} isOpened = {state.isIngridientOpen}/>}
    </div>
  )
}

export default App;