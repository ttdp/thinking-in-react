import React, {Component} from 'react'

class ProductCategoryRow extends Component {

    render() {
        return (
            <tr>
                <td><b>{this.props.category}</b></td>
            </tr>
        )
    }

}

export default ProductCategoryRow