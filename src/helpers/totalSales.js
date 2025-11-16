import {inventory} from "../constants/inventory.js";

function totalSalesFromInventory() {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].sold || 0;
    }
    return total;
}
export const total = totalSalesFromInventory();