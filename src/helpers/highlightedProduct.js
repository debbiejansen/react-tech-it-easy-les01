import {bestSellingTv} from "../constants/inventory.js";

function highlightedProduct() {
    let highlighted = 0;
    for (let i = 0; i < bestSellingTv.length; i++) {
        highlighted += bestSellingTv[i].originalStock || 0;
    }
    return highlighted;
}
export const highlighted = highlightedProduct();

export function formatPrice(amount) {
    const value = Number(amount);
    return "€" + value + ",-";
}