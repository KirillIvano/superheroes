import React from 'react';
import styles from './universe.style.css';

const Universe = function(props){
    return (
        <div className={styles.universe}>
            <img src="/dc-logo.png" className={styles.dc} alt=""/>
            <img src="/Marvel.png" className={styles.marvel} alt=""/>
        </div>
    );
};

export default Universe;