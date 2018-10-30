var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Customer = (function () {
    function Customer(company, country) {
        this.company = company;
        this.country = country;
    }
    return Customer;
}());
var CustomerContact = (function (_super) {
    __extends(CustomerContact, _super);
    function CustomerContact(firstname, lastname, company, country) {
        var _this = _super.call(this, company, country) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        return _this;
    }
    CustomerContact.prototype.GetContactDetails = function () {
        var obj = { fullname: this.firstname + ' ' + this.lastname, emailaddress: this.email };
        return obj;
    };
    return CustomerContact;
}(Customer));
var contact = new CustomerContact('Tom', 'Jerry', 'Company 1', 'USA');
contact.email = 'tom@somedomain.com';
var div = document.getElementById("div1");
div.innerHTML = contact.GetContactDetails().fullname + '<br>' + contact.GetContactDetails().emailaddress;
//# sourceMappingURL=TestTypeSctipt1.js.map