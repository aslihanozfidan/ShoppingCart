import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ProductCard from '../ProductCard/ProductCard';
import ShoppingCartButtons from '../ShoppingCartButtons/ShoppingCartButtons';

class ShoppingCart extends Component {
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
            <div className="shopping-cart">
                <h2>Shopping Cart for {this.props.name}</h2>                
                <ProductCard                     
                    productName="OMO Active Fresh" 
                    productStock="Stokta Var"
                    productShipping="Ücretsiz Kargo"
                    productGift="**Hediye Paketi İmkanı"
                    productImage="https://www.omo.com/content/dam/unilever/omo/turkey/pack_shot/hero_image/laundry/fabrics_cleaning/omo_s%C4%B1v%C4%B1_%C3%A7ama%C5%9F%C4%B1r_deterjan%C4%B1_act%C4%B1ve_fresh_2700_ml/8690637727276-660610.jpg.ulenscale.490x490.jpg"
                    productPrice="10₺" />
                <ShoppingCartButtons />               
            </div>
        );        
    }
}


export default ShoppingCart;
