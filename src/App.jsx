import './App.css';
import './helpers/totalSales.js';
import {totalSales} from './helpers/totalSales.js';
import {totalBought} from './helpers/totalBought.js';
import {totalToSell} from './helpers/totalSales.js';
import {bestSellingTv} from './constants/inventory.js';
import {formatPrice} from './helpers/highlightedProduct.js';
import {formatSizes} from './helpers/formatSizes.js';


function App() {
    function logMessage(message) {
        console.log(message);
    }

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
            </header>
            <main>
                <article className="product totalSold">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total-sales">{totalSales}</h3>
                </article>

                <article className="product totalBought">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total-bought">{totalBought}</h3>
                </article>

                <article className="product totalToSell">
                    <p className="product-description">Aantal verkochte producten</p>
                    <h3 className="product-total-to-sell">{totalToSell}</h3>
                </article>

                <article className="product highlighted">
                    <img src={bestSellingTv.sourceImg} alt="Bestselling TV"/>
                    <div className="highlighted-text">
                        <p>{bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}</p>
                        <p>{formatPrice(bestSellingTv.price)}</p>
                        <p>{formatSizes(bestSellingTv.availableSizes)}</p>
                    </div>
                </article>
                <button type={"button"} onClick={function(){logMessage("Meest verkocht eerst");}}>Meest verkocht eerst</button>
                <button type={"button"} onClick={function(){logMessage("Goedkoopste eerst");}}>Goedkoopste eerst</button>
                <button type={"button"} onClick={function(){logMessage("Meest geschikt voor sport eerst");}}>Meest geschikt voor sport eerst</button>
            </main>

        </>
    );
}

export default App
