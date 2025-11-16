import {inventory} from "../constants/inventory.js";

function totalSalesFromInventory() {
    let totalSales = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSales += inventory[i].sold || 0;
    }
    return totalSales;
}
export const totalSales = totalSalesFromInventory();