import FilterableProductTable from './components/FilterableProductTable'
import PRODUCTS from './data/products'

function App() {
    return (
        <FilterableProductTable products={PRODUCTS}/>
    );
}

export default App;
