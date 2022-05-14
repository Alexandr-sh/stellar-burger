import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ListItem from './ListItem.js';

class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "Булки"
        }
        this.buns = [
            {
                "_id":"60666c42cc7b410027a1a9b1",
                "name":"Краторная булка N-200i",
                "type":"bun",
                "proteins":80,
                "fat":24,
                "carbohydrates":53,
                "calories":420,
                "price":1255,
                "image":"https://code.s3.yandex.net/react/code/bun-02.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
                "__v":0
               },
               {
                "_id":"60666c42cc7b410027a1a9b2",
                "name":"Флюоресцентная булка R2-D3",
                "type":"bun",
                "proteins":44,
                "fat":26,
                "carbohydrates":85,
                "calories":643,
                "price":988,
                "image":"https://code.s3.yandex.net/react/code/bun-01.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
                "__v":0
               }
        ]
    }
    setCurrent = () => {
    };

    render() {
        return <div className={styles.BurgerIngredients}>
            <h2 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h2>
            <div className={styles.selector}>
                <Tab value="Булки" active={this.state.current === "Булки"} onClick={this.setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={this.state.current === 'Соусы'} onClick={this.setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={this.state.current === 'Начинки'} onClick={this.setCurrent}>
                    Начинки
                </Tab>
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Булки</h3>
            <div className={styles.ingridientsList}>
            {this.buns.map((ingridient, index)=>(
                <ListItem data={ingridient}/>
                ))}
            </div>
        </div>;
    }
}

export default BurgerIngredients;