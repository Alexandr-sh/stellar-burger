import React from 'react';
import styles from './ListItem.module.css';

class ListItem extends React.Component {
    setCurrent = () => {
    };
    render() {
        return <div className={styles.listItem}>
            <img src={this.props.data.image} className = {styles.image}/>
            <div className={styles.counter}></div>
        </div>;
    }
}

export default ListItem;