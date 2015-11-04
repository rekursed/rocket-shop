Template.vendorShow.helpers({
    products: function () {
        return Products.find({"vendor.id": this.id})
    }
});