import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

/*
function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function groupBy2(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}
*/

class ProductTable extends Component {
    render() {
        const {products} = this.props
        const {filterText} = this.props
        const {inStockOnly} = this.props
        
        const rows = []
        let lastCategory = null

        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return
            }

            if (inStockOnly && !product.stocked) {
                return
            }

            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category} />
                )
            }

            rows.push(
                <ProductRow product={product} key={product.name} />
            )

            lastCategory = product.category
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default ProductTable