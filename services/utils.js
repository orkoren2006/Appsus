export const utilService = {
    getPrice,
    makeId
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

function makeId(length=5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
