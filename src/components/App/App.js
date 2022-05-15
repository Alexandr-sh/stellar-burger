import React, { useEffect } from 'react';
import styles from './App.module.css';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';


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

const url = 'https://norma.nomoreparties.space/api/ingredients';

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
      }).then(res => checkApiError(res))
      const serverData = await res.json();
      setState({ dataB: serverData.data, loading: false });
    }
    getProductData();
  }, [])

  const addIngridient = (id) => {
    const newData = [...state.dataB];
    newData.forEach((item) => {
      if (item._id === id) item.__v +=1;
    })

    setState({dataB:newData});
  }

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        {!state.loading && <BurgerIngredients data={state.dataB} addIngridient = {addIngridient}/>}
        {!state.loading && <BurgerConstructor data={state.dataB}/>}
      </div>
      <IngredientModal data = {initiaIngridientData}/>
    </div>
  )
}

export default App;