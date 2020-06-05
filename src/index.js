import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const array = [{ name: 'iphone', price: 2500, category: 'electronics' },
{ name: 'jeans', price: 120, category: 'clothes' },
{ name: 'smart tv', price: 3500, category: 'electronics' }]
ReactDOM.render(
  <React.StrictMode>
    <ProductTable elements={array} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
