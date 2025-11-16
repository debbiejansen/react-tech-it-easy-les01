import './App.css';
import './helpers/totalSales.js';
import {total} from './helpers/totalSales.js';

function App() {


    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <main>
                <h2>Verkoopoverzicht</h2>
                <article className="product">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total">{total}</h3>
                </article>

            </main>
        </>
    );
}

export default App
