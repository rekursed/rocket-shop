/**
 * Created by rakib on 19/10/15.
 */
Template.loading.rendered = function () {
    if ( ! Session.get('loadingSplash') ) {
        this.loading = window.pleaseWait({
            logo: '/images/Meteor-logo.png',
            backgroundColor: '#7f8c8d',
            loadingHtml: message + spinner
        });
        Session.set('loadingSplash', true); // just show loading splash once
    }
};

Template.loading.destroyed = function () {
    if ( this.loading ) {
        this.loading.finish();
    }
};

var message = '<p class="loading-message">Taking Off...</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';