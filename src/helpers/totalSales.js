import {inventory} from "../constants/inventory.js";

function totalSalesFromInventory() {
    let totalSales = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSales += inventory[i].sold || 0;
    }
    return totalSales;
}
export const totalSales = totalSalesFromInventory();



function totaltoSellFromInventory() {
    let totalToSell = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalToSell += inventory[i].originalStock - inventory[i].sold;
    }
    return totalToSell;
}
export const totalToSell = totaltoSellFromInventory();