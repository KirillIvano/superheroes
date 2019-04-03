import React from 'react';
import styles from './card.style.css';
const Card = function(props){
    
        return (
            <div onClick={()=>{props.addCard(props.name, props.img);}} className={styles.card + " " + styles.card_control}>
                <img src={props.img} alt=""/>
                <p>{props.name}</p>
            </div>);
};

export default Card;