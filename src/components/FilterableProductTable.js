import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)

        this.state = {filterText: '', inStockOnly: false}

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText})
    }

    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly})
    }

    render() {
        return (
            <div>
                <h1>Thinking in React</h1>
                <SearchBar 
                    inStockOnly={this.state.inStockOnly} 
                    filterText={this.state.filterText} 
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}/>
                <ProductTable 
                    products={this.props.products} 
                    inStockOnly={this.state.inStockOnly} 
                    filterText={this.state.filterText} />
            </div>
        )
    }
}

export default FilterableProductTable