import React from 'react';
import styles from './universe.style.css';
import {Link} from'react-router-dom';
const Universe = function(props){
    return (
        <div className={styles.universe}>
            <Link to="/dc">
            <img src="/dc-logo.png" className={styles.dc} alt=""/>
            </Link>
            <Link to="/marvel">
            <img src="/Marvel.png" className={styles.marvel} alt=""/>
            </Link>
        </div>
    );
};

export default Universe;