// oefenbestand.js
import {inventory} from './inventory.js';

function showOutcomeInConsole() {
    inventory.forEach(function (tv) {
        console.log(tv.name);
    });

    const soldOutTvs = inventory.filter(function (tv){
        return tv.sold === tv.originalStock;
    })
    console.log(soldOutTvs);
}

export default showOutcomeInConsole;