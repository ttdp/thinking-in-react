import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import PRODUCTS from './../data/products'

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <h1>Thinking in React</h1>
                <SearchBar />
                <ProductTable products={PRODUCTS}/>
            </div>
        )
    }
}

export default FilterableProductTable