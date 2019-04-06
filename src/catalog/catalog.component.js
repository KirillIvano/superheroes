import React, {Component} from 'react';
import styles from './catalog.style.css';
import {connect} from 'react-redux';
import Card from './../card/card.component';


class Catalog extends Component{
    
    constructor(props){
        super(props);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.state = {
        };
    };

    decreaseCount(ind){
        this.props.dispatch({
            type: 'DECREASE',
            index: ind,
            universe: this.props.universe,
        });
    }
    
    constructCards(){
        let i;
        const source = this.props.selected;
        const len = source.length;
        const arr = [];
        for (i=0;i<len;i++){
            arr.push(<Card decrease={this.decreaseCount} num={source[i]['num']} img={source[i]['image']} index={i} key={i}/>);
        }
        return arr;
    };

    render(){
            return (
            <div className={styles.catalog}>
                {this.constructCards()}
            </div>);
    };
};

const mapStateToProps = function(state){
    return {
        'dc': state['storage']['dc'],
        'marvel': state['storage']['marvel'],
        'selected': state['storage']['selected']
    };
};


export default connect(mapStateToProps)(Catalog);