import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'


class BurgerConstructor extends React.Component {
    render() {
        return <div className={styles.burgerConstructor}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
        </div>;
    }
}

export default BurgerConstructor;