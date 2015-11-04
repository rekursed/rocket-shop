/**
 * Created by rakib on 4/11/15.
 */
Template.productShow.events({
    "click #add-to-cart": function (ev) {
        ev.preventDefault();

        addToCart(this.sku, function (err, res) {
            Router.go("cartShow");
        });
    }
});