/**
 * Created by rakib on 19/10/15.
 */
Template.home.helpers({
    featured: function(){
        return Products.featured();
    }
});