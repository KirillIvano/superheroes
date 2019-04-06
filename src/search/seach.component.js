import React,{Component} from 'react';
import styles from './search.style.css';
import {connect} from 'react-redux';
class Search extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        };
    };

    handleChange(e){
        this.props.dispatch({
            type: 'UPDATE_SEARCH',
            text: e.target.value
        });
    };
    
    render(){
        return (
            <div className={styles.search_container}>
                <div className={styles.search_cover}>  
                    <input id="search" onChange={this.handleChange} className={styles.search} placeholder="Введите имя">
                    </input>
                </div>
            </div>

        );
    };
};


export default connect()(Search);