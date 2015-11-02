/**
 * Created by rakib on 19/10/15.
 */
Products = new Mongo.Collection("products");



Products.bySku = function (sku) {
    return Products.findOne({sku: sku});
};

/*
Fetching the featured products in frontend
 */

Products.featured = function () {
    var featured = ["true"];
    return Products.find(
        {featured: 'true'},
        //to opt out the fields from the front end access
        {fields : {inventory:false,cost:false}}
    );
};

Products.all=function(){
    return Products.find({});
}

Products.allow({
    update: function (userid, product) {
        return isAdmin();
    },
    insert: function (userid, product) {
        return isAdmin();
    },
    remove: function (userid, product) {
        return isAdmin();
    }
});



