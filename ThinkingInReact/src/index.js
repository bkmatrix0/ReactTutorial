import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import SimpleApp from './Component/SimpleApp';
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <SimpleApp Products={PRODUCTS}/>,
    document.getElementById('root')
);