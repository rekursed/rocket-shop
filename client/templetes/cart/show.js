/**
 * Created by rakib on 4/11/15.
 */

Template.cartShow.helpers({
    cart: function () {
        return Carts.getCart(userKey);
    }
});