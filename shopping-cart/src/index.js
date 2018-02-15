import React from 'react';
import { render } from 'react-dom';
import styles from './style/style.css';

import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
    render() {
        return (
            <ShoppingCart name="Asli" />
        );        
    }
}


