import './App.css';
import './helpers/totalSales.js';
import {totalSales, totalToSell} from './helpers/totalSales.js';
import {totalBought} from './helpers/totalBought.js';
import {bestSellingTv, inventory} from './constants/inventory.js';
import {formatPrice} from './helpers/highlightedProduct.js';
import {formatSizes} from './helpers/formatSizes.js';
import showOutcomeInConsole from './constants/oefenbestand.js';

function App() {
    showOutcomeInConsole();

    function logMessage(message) {
        console.log(message);
    }

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
            </header>

            <section className="sales-overview">
                <article className="product totalSold">
                    <p className="product-title">Aantal verkochte producten</p>
                    <h3 className="product-number">{totalSales}</h3>
                </article>

                <article className="product totalBought">
                    <p className="product-title">Aantal verkochte producten</p>
                    <h3 className="product-number">{totalBought}</h3>
                </article>

                <article className="product totalToSell">
                    <p className="product-title">Aantal verkochte producten</p>
                    <h3 className="product-number">{totalToSell}</h3>
                </article>
            </section>

            <section>
                <h2>Best verkochte tv</h2>
                <article className="highlighted">
                    <img src={bestSellingTv.sourceImg} alt="Bestselling TV"/>
                    <div className="highlighted-text">
                        <p>{bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}</p>
                        <p>{formatPrice(bestSellingTv.price)}</p>
                        <p>{formatSizes(bestSellingTv.availableSizes)}</p>
                    </div>
                </article>
            </section>

            <section>
                <h2>Alle tvs</h2>
                <div className="button-row">
                    <button type={"button"} onClick={function () {
                        logMessage("Meest verkocht eerst");
                    }}>Meest verkocht eerst
                    </button>
                    <button type={"button"} onClick={function () {
                        logMessage("Goedkoopste eerst");
                    }}>Goedkoopste eerst
                    </button>
                    <button type={"button"} onClick={function () {
                        logMessage("Meest geschikt voor sport eerst");
                    }}>Meest geschikt voor sport eerst
                    </button>
                    <button type={"button"} onClick={function () {
                        logMessage("Grootse schermgroottes eerst");
                    }}>Grootse schermgroottes eerst
                    </button>
                </div>

                <div className={"tv-list"}>
                    {inventory.map(function(tv) {
                        return (
                            <article key={tv.id} className={"tv-item"}>
                                <img src={tv.sourceImg} alt={tv.name} />
                                <div className={"tv-text"}>
                                    <p className={"tv-title"}>
                                        {tv.brand} {tv.type} - {tv.name}
                                    </p>
                                    <p className={"tv-price"}>
                                        €{tv.price},-
                                    </p>
                                    <p className="tv-sizes">
                                        {formatSizes(tv.availableSizes)}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default App
