import React, {Component} from 'react';
import styles from 'menu.style.css';
import {connect} from 'react-redux';

class Menu extends Component{

};

const mapStateToProps = function(state){
    return {
        'dc': state['storage']['dc'],
        'marvel': state['storage']['marvel']
    };
};

export default connect()(Menu);