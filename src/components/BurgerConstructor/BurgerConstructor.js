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

    getData(){
        this.data = [];
        this.props.data.forEach(element => {
            if (element.__v > 0) {
                for (let i = 0; i < element.__v; i++) this.data.push(element)
            }
        });
    }

    render() {
        this.getData();
        return <div className={styles.burgerConstructor}>
            {
                this.data.map((ingridient, index) => (
                        <ConstructorElement
                            isLocked={false}
                            text={ingridient.name}
                            price={ingridient.price}
                            thumbnail={ingridient.image}
                            key={ingridient._id}
                        />
                ))
                }
        </div>;
    }
}

export default BurgerConstructor;