import React,{Component} from 'react';
import styles from './search.style.css';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };
    
    render(){
        return (
            <div className={styles.search_container}>
                <div className={styles.search_cover}>  
                    <input className={styles.search} placeholder="Введите имя">
                    </input>
                </div>
            </div>

        );
    };
};


export default Search;