import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

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


class ProductTable extends Component {

    constructor(props) {
        super(props)

        // this.categories2 = groupBy2(props.products, product => product.category)
        // console.log(this.categories2.size)
    }

    render() {
        const categories = groupBy(this.props.products, 'category')
        const rows = []

        const keys = Object.keys(categories)
        keys.forEach(category => {
            rows.push(
                <ProductCategoryRow category={category} key={category}/>
            )

            let products = categories[category]
            console.log(products)

            products.forEach(product => {
                rows.push(
                    <ProductRow name={product.name} price={product.price} key={product.name}/>
                )
            })
        })

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
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable