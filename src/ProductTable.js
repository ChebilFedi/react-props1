import React from 'react';

import './App.css';
import PropTypes, { object } from 'prop-types';

function ProductTable(props) {
    return (
        <div className="ProductTable">

            <table style={{ height: '100%', width: '600px'}} >
            <tr>

<th style={{ color: 'Red' }}>Name</th>
<th style={{ color: 'red' }}>Price</th>
<th style={{ color: 'red' }}>Catregory</th>
</tr>
{props.elements.map((el, i) => (
    <tr>
    <td key={i} style={{ color: 'white',textAlign:'center' }} >
        {el.name}
    </td>
    <td key={i} style={{ color: 'white' ,textAlign:'center'}} >
        {el.price}
    </td>
    <td key={i} style={{ color: 'white',textAlign:'center' }} >
        {el.category}
    </td>
    </tr>

))}




            </table>


        </div>
    );
}

export default ProductTable;
ProductTable.propTypes={
    elements:PropTypes.arrayOf(PropTypes.object)
}
