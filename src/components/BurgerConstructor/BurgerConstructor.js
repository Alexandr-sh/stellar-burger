import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'


class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        const newData = props.data.filter(item => item.__v > 0);
        this.state = { data: newData };
        console.log(props.data[0].__v);
    }
    render() {
        return <div className={styles.burgerConstructor}>
            {
                this.props.data.map((ingridient, index) => (
                    ingridient.__v > 0 ? (
                        <ConstructorElement
                            isLocked={false}
                            text={ingridient.name}
                            price={ingridient.price}
                            thumbnail={ingridient.image}
                            key={ingridient._id}
                        />
                    ) : (
                        null
                    )
                ))
            }
        </div>;
    }
}

export default BurgerConstructor;