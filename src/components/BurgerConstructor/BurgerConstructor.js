import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        const newData = props.data.filter(item => item.__v > 0);
        this.totalPrice = 0;

    }

    updateData() {
        this.data = [];
        this.props.data.forEach(element => {
            if (element.__v > 0) {
                for (let i = 0; i < element.__v; i++) {
                    this.data.push(element);
                    this.totalPrice += element.price;
                }
            }
        });
    }



    render() {
        this.updateData();
        return <div className={styles.burgerConstructor} onClick={this.handleButtonClick}>
            {
                this.data.map((ingridient, index) => (
                    <ConstructorElement
                        isLocked={false}
                        text={ingridient.name}
                        price={ingridient.price}
                        thumbnail={ingridient.image}
                        key={ingridient._id + index}
                    />
                ))
            }
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{this.totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`}>Оформить заказ</button>
            </div>
        </div>;
    }
}

export default BurgerConstructor;