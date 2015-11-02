/**
 * Created by rakib on 19/10/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/",{
    name: "home",
    data: {
        message:"Welcome to Rocket Shop"
    }
});
Router.route("/contact",{
    name: "contact",
});
Router.route("/aboutus",{
    name: "aboutus",

});

Router.route("/product/:sku",{
    name: "productShow",
    data : function(){
        var sku = this.params.sku;
        return Products.bySku(sku);
    }
});

Router.route("/vendor/:slug", {
    name: "vendorShow",
    data: function () {
        var slug = this.params.slug;
        return Vendors.find(slug);
    }
});

