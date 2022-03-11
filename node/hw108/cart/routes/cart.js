var express = require('express');
const Cart = require('../cart');
var router = express.Router();

/* GET home page. */
router.route('/')
    .get((req, res, next) => {
        const itemsObj = req.session.cart?.items

        console.log('my cart', itemsObj);
        const cartItems = [];
        for (var key in itemsObj) {
            const id = +key;
            const quantity = itemsObj[key];
            const cartItem = global.items.find(item => item.id === id);
            cartItem.quantity = quantity;
            cartItems.push(cartItem);
            cartItem.subTotal = quantity * cartItem.price;
            //console.log(+key, itemsObj[key]);
            //console.log(`${key}: ${value}`);
        }
        console.log(cartItems);
        res.render('layout', {
            title: 'Express',
            cartItems,
            partials: {
                content: 'cart'
            }
        });
    })


module.exports = router;