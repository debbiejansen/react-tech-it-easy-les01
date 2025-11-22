export function formatSizes(sizes) {
    const formattedSizes = [];
    for (let i = 0; i < sizes.length; i++) {
        const inchSize = sizes[i];
        const inchToCm = Math.round(inchSize * 2.54);
        const formatted = inchSize + " inch (" + inchToCm + " cm)";
        formattedSizes.push(formatted);
    }

    return formattedSizes.join(" | ");
}