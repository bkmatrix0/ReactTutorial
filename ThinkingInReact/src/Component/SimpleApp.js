import React from 'react';

class SearchArea extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.handleInput(
            this.searchText.value,
            this.isChecked.checked
        );
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search..." value={this.props.searchText} ref={(input) => this.searchText = input} onChange={this.handleChange}/>
                    <p>
                        <input type="checkbox" value={this.props.isChecked} ref={(input) => this.isChecked = input} onChange={this.handleChange} />
                        Only show products in stock
                    </p>

                </form>
            </div>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        var productName = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{productName}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ListArea extends React.Component {
    render() {
        var productRows = [];
        var category = '';
        this.props.Products.sort().forEach((product) => {
            if(product.category !== category) {
                productRows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            productRows.push(<ProductRow product={product} key={product.name}/>);
            category = product.category;
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {productRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class SumArea extends React.Component {

    render() {
        var sum = 0;

        this.props.SelectedProducts.sort().forEach((product) => {
            console.log(product.price.substring(1,product.price.length));
           sum += parseFloat(product.price.substring(1,product.price.length));
        });

        return (
            <span>SUM : ${sum}</span>
        );
    }
}

class SimpleApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : '',
            isChecked : false,
            SelectedProducts : this.props.Products
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(text, checked) {

        var selectedProducts = [];
        this.props.Products.sort().forEach((product) => {
            if(text === '') {
                if(!checked) {
                    selectedProducts.push(product);
                } else if(product.stocked) {
                    selectedProducts.push(product);
                }
            } else if(product.name.indexOf(text) > 0) {
                if(!checked) {
                    selectedProducts.push(product);
                } else if(product.stocked) {
                    selectedProducts.push(product);
                }
            }
        });

        this.setState({
            searchText: text,
            isChecked: checked,
            SelectedProducts : selectedProducts
        });
    }

    render() {
        return (
            <div>
                <SearchArea searchText={this.state.searchText} isChecked={this.state.isChecked} handleInput={this.handleInput} />
                <ListArea searchText={this.state.searchText} isChecked={this.state.isChecked} Products={this.state.SelectedProducts} />
                <SumArea SelectedProducts={this.state.SelectedProducts}/>
            </div>
        );
    }
}

export default SimpleApp;