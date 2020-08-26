export const utilService = {
    getPrice
}

function getPrice(price, currencyCode) {
    const options = { style: 'currency', currency: currencyCode };

    var priceToPrev
    switch (currencyCode) {
        case 'ILS':
            priceToPrev = new Intl.NumberFormat('he-HE', options).format(price);
            break;
        case 'USD':
            priceToPrev = new Intl.NumberFormat('en-EN', options).format(price);
            break;
        case 'EUR':
            priceToPrev = new Intl.NumberFormat('en-EN', options).format(price);
            break;
        default:
            break
    }

    return priceToPrev;
}
