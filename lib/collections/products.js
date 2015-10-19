/**
 * Created by rakib on 19/10/15.
 */
Products = new Mongo.Collection("products");



Products.bySku = function (sku) {
    return Products.findOne({sku: sku});
};

Products.featured = function () {
    var featuredStatus = ["true"];
    return Products.find({});
};

Products.all=function(){
    return Products.find({});
}

/*Products.allow({
    update: function (userid, product) {
        return isAdmin();
    },
    insert: function (userid, product) {
        return isAdmin();
    },
    remove: function (userid, product) {
        return isAdmin();
    }
});*/



