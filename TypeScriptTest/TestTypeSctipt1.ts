interface IContact {
    firstname: string;
    lastname: string;
    email: string;
}

class Customer {
    address: string;
    constructor(public company: string, public country: string) {
    }
}

class CustomerContact extends Customer implements IContact {
    firstname: string;
    lastname: string;
    email: string;
    active: boolean;

    constructor(firstname: string, lastname: string, company: string, country: string) {
        super(company, country);
        this.firstname = firstname;
        this.lastname = lastname;
    }

    GetContactDetails() {
        var obj = { fullname: this.firstname + ' ' + this.lastname, emailaddress: this.email };
        return obj;
    }
}

var contact = new CustomerContact('Tom', 'Jerry', 'Company 1', 'USA');
contact.email = 'tom@somedomain.com';
var div = document.getElementById("div1");
div.innerHTML = contact.GetContactDetails().fullname + '<br>' + contact.GetContactDetails().emailaddress;