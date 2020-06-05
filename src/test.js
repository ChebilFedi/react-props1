import React from 'react';

import './App.css';
import PropTypes, { object } from 'prop-types';

function ProductTable(props) {
    return (
        <div className="ProductTable">

            <table style={{ height: '100%', width: '600px'}} >
                <tr>

                    <th style={{ color: 'white' }}>Name</th>
                    {props.elements.map((el, i) => (
                        <td key={i} style={{ color: 'white' }} >
                            {el.name}
                        </td>
                    ))}
                </tr>
                <tr>
                    <th style={{ color: 'white' }}>Price</th>
                    {props.elements.map((el, i) => (
                        <td key={i} style={{ color: 'white' }} >
                            {el.price}
                        </td>
                    ))}
                </tr>
                <tr>
                    <th style={{ color: 'white' }}>Catregory</th>
                    {props.elements.map((el, i) => (
                        <td key={i} style={{ color: 'white' }}  >
                            {el.category}
                        </td>
                    ))}
                </tr>



            </table>


        </div>
    );
}

export default ProductTable;
ProductTable.prototype={
    elements:PropTypes.arrayOf(Proptypes.object)
}
