import {inventory} from "../constants/inventory.js";

function totalBoughtFromInventory() {
    let totalBought = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalBought += inventory[i].originalStock || 0;
    }
    return totalBought;
}
export const totalBought = totalBoughtFromInventory();