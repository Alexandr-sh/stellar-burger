import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


class BurgerConstructor extends React.Component {
    updateData() {
        this.data = [];
        this.totalPrice = this.props.bun.price*2;
        this.props.data.forEach(element => {
            if ((element.__v > 0)&&(element.type!=="bun")) {
                for (let i = 0; i < element.__v; i++) {
                    this.data.push(element);
                    this.totalPrice += element.price;
                }
            }
        });
    }

    handleClick = () => {

    }

    render() {
        this.updateData();
        return <div className={styles.burgerConstructor}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={this.props.bun.name}
                price={this.props.bun.price}
                thumbnail={this.props.bun.image}
                key={this.props.bun._id}
                onClick={this.handleClick}
            />
            {
                this.data.map((ingridient, index) => (
                    <ConstructorElement
                        isLocked={false}
                        text={ingridient.name}
                        price={ingridient.price}
                        thumbnail={ingridient.image}
                        key={index}
                        onClick={this.handleClick}
                    />
                ))
            }
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={this.props.bun.name}
                price={this.props.bun.price}
                thumbnail={this.props.bun.image}
                key={this.props.bun._id+1}
                onClick={this.handleClick}
            />
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{this.totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`}>Оформить заказ</button>
            </div>
        </div>;
    }
}

export default BurgerConstructor;