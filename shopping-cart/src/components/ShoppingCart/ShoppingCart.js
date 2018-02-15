import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="shopping-cart">
                <h2>Shopping Cart for {this.props.name}</h2>                
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
        );        
    }
}
