import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />Only show products in stock
                </p>
            </div>
        )
    }
}

export default SearchBar