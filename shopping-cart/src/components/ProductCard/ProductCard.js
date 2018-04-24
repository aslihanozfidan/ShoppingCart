import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/style.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1            
        };

        this.counterIncreaseClick = this.counterIncreaseClick.bind(this);
        this.counterDecreaseClick = this.counterDecreaseClick.bind(this);        
    }

    counterIncreaseClick() {
        this.setState(prevState => ({
            count: this.state.count + 1
        }));
    }

    counterDecreaseClick() {
        if(this.state.count >= 1) {
            this.setState(prevState => ({
                count: this.state.count - 1
            }));
        }        
    }

    render() {
        return (
            <div className="product">
                <div className="name">{this.props.productName}</div>
                <div className="image">
                    <img src={this.props.productImage} />
                </div>     
                <div className="properties">  
                    <div className="stock">{this.props.productStock}</div>
                    <div className="shipping">{this.props.productShipping}</div>
                    <div className="gift">{this.props.productGift}</div>
                    <div className="price"><span>{this.props.productPrice}</span></div>
                </div>                       
            </div>
        );   

    }
}


export default ProductCard;
