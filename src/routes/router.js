const mainRoute = require('./main/main');
const productsRoute = require('./products/products');
const signUpRoute = require('./users/signUpUsers');

const router = {
    '/signup': signUpRoute,
    '/products': productsRoute,
    default: mainRoute
};

module.exports = router;