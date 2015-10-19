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

Router.route("/products/:sku",{
    name: "product",
    data : function(){
        var sku = this.params.sku;
        return Products.bySku(sku);
    }
});