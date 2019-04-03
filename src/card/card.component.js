import React, {Component} from 'react';
import styles from './card.style.css';

class Card extends Component{
    
    constructor(props){
        super(props);
        this.constructCount = this.constructCount.bind(this);
        this.constructDecrement = this.constructDecrement.bind(this);
        this.state = {
        };
    };

    constructCount(){
        if (this.props.num>1){
            return <div className={styles.card_label}>{this.props.num}</div>;
        } 
    }

    constructDecrement(){
        this.props.decrease(this.props.index);
    }
    render(){
        return (
            <div className={styles.card}>
                <img src={this.props.img} alt=""/>
                {this.constructCount()}
                <div onClick={this.constructDecrement} className={styles.card_delete}></div>
            </div>);
    };
};

export default Card;