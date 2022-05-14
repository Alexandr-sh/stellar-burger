import React from 'react';
import styles from './ListItem.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


class ListItem extends React.Component {
    setCurrent = () => {
    };
    render() {
        return <div className={styles.listItem}>
            <img src={this.props.data.image} className = {styles.image}/>
            <div className={styles.price}>
                <div className={`text text_type_digits-default ${styles.value}`}>{this.props.data.price}</div>
                <CurrencyIcon type="primary"/>
            </div>
            <div className={styles.name}>1234</div>
        </div>;
    }
}

export default ListItem;