import React,{Component} from 'react';
import BrowserRouter from 'react-router-dom';
import styles from './menu.style.css';
import Card from './../card/cardControl.component';
import {connect} from 'react-redux';
import Search from '../search/seach.component';

// const clearSearch = function(){
//     const search = document.getElementById('search');
//     return function(){
//         return search.value = '';
//     };
// }();

class Menu extends Component{
    constructor(props){
        super(props);
        this.addCard = this.addCard.bind(this);
        this.renderCards = this.renderCards.bind(this);
        this.state = {
        };
    };

    addCard(name, img){
        this.props.dispatch({
            type: 'ADD_CARD',
            universe: this.props.universe,
            name: name,
            image: img
        });
    }

    renderCards(){
        let i;
        const source = this.props[this.props.universe];
        const len = source.length;
        const arr = [];
        let flag = false;
        for (i=0;i<len;i++){
            if(~source[i]['name'].indexOf(this.props.filter)){
                arr.push(<Card addCard={this.addCard} num={source[i]['num']} name={source[i]['name']} img={source[i]['image']} key={i}/>);
                flag = true;
            }
        }
        if (!flag){
            return <p className={styles.not_found}>Ничего не найдено</p>; 
        }
        return arr;
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: 'CLEAR_SEARCH'
        });
    };
    
    render(){
        return (
            <div className={styles.menu}>
                <Search></Search>
                {this.renderCards()}
            </div>
        );
    };
};

const mapDispatchToProps = function(state){
    return{
        'dc': state['storage']['dc'],
        'marvel': state['storage']['marvel'],  
        'filter': state['storage']['filter']
    };
};

export default connect(mapDispatchToProps)(Menu);