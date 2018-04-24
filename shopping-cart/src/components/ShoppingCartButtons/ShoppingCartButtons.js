import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/style.css';

class ShoppingCartButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laterList: [],
            cartList: []
        }

        this.addLaterList = this.addLaterList.bind(this);
        this.addCartList = this.addCartList.bind(this);
        this.deleteFromCartList = this.deleteFromCartList.bind(this);
    }

    addCartList() {
        
    }

    addLaterList() {
        this.setState(prevState => ({
            laterList: this.state.laterList.push()
        }));
    }

    deleteFromCartList() {

    }

    render() {
        return (
            <div className="shopping-cart-buttons">
                <a className="count">
                    {this.state.count} 
                    <button onClick={this.counterIncreaseClick}>+</button>
                    <button onClick={this.counterDecreaseClick}>-</button>
                </a>
                <a className="add-later">Yedeğe Al</a>
                <a className="delete">Sil</a>
            </div>   
        );        
    }
}


export default ShoppingCartButtons;
