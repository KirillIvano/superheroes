import React, {Component} from 'react';
import styles from 'catalog.style.css';
import {connect} from 'react-redux';

class Catalog extends Component{

    constructCards(){
        
    }

    render(){
        
    }
};

const mapStateToProps = function(state){
    return {
        'dc': state['storage']['dc'],
        'marvel': state['storage']['marvel'],
        'selected': state['storage']['selected']
    };
};


export default connect(mapStateToProps)(Catalog);