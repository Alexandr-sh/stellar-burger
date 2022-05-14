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
        console.log("props.data");
        console.log(props.data);
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
            <div className={styles.ingridientsList} >
            {this.props.data.map((ingridient, index)=>(
                ingridient.type === "bun" ? (
                    <ListItem data={ingridient} key={ingridient._id}/>
                  ) : (
                    null
                  )
                  ))}
            </div>
        </div>;
    }
}

export default BurgerIngredients;

/*<ListItem data={ingridient} key={ingridient._id}/>*/