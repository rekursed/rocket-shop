/**
 * Created by rakib on 4/11/15.
 */

Template.cartShow.helpers({
    cart: function () {
        currentCart = Carts.getCart(userKey);
        return currentCart;
    }
});

Template.cartShow.events({
    "click .remove-from-cart": function (ev) {
        ev.preventDefault();
        removeFromCart(this.sku, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                if (cart.items.length === 0) {
                    Router.go("home");
                }
            }
        });
    },
    "change .item-qty": function (ev) {
        var newQty = $(ev.currentTarget).val();
        if (!isNaN(newQty)) {
            newQty = parseInt(newQty);
            var name = this.name;
            if (newQty === 0) {
                removeFromCart(this.sku);
            } else {
                this.quantity = parseInt(newQty);
                saveCart(currentCart, function (err, res) {
                    if (err) {
                        sAlert.error(err);
                    } else {
                        sAlert.success(name + " updated");
                    }
                });
                $(ev.currentTarget).val(newQty);
            }
        }
    }

});