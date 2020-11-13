import React, { Component } from 'react'

class ProductRow extends Component {
    render() {
        const product = this.props.product
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
        const price = product.price
        
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }

}

export default ProductRow