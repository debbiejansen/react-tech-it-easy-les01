import './App.css';
import './helpers/totalSales.js';
import {totalSales} from './helpers/totalSales.js';
import {totalBought} from './helpers/totalBought.js';

function App() {


    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <main>
                <h2>Verkoopoverzicht</h2>
                <article className="product">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total-sales">{totalSales}</h3>
                </article>

                <article className="product">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total-bought">{totalBought}</h3>
                </article>

            </main>
        </>
    );
}

export default App
