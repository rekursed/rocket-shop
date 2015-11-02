Template.vendorShow.helpers({
    products: function () {
        return Products.find({"Vendor.id": this.id})
    }
});