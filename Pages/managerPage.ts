import { ElementFinder,element,by } from "protractor";
import chai from "chai";
import { topMenu } from "./topMenu";
var expect = chai.expect;

export class managerPage extends topMenu
{
    addCustomerButton:ElementFinder;
    openAccountButton:ElementFinder;
    customersButton:ElementFinder;
    homeButton:ElementFinder;

    constructor()
    {
        super();
        this.verify_bankName("managerPage");
        this.verify_homeButton_is_displayed("managerPage");
        this.addCustomerButton=element(by.css("button[ng-class='btnClass1']"));
        this.openAccountButton=element(by.css("button[ng-click='openAccount()']"));
        this.customersButton=element(by.css("button[ng-click='showCust()']"));
        this.homeButton=element(by.css("button[class='btn home']"));
    }

    public  async click_on_addCustomers_button() {
        await this.addCustomerButton.click();
    }

    public async click_on_openAccount_button() {
        await this.openAccountButton.click();
    }

    public async click_on_customers_button() {
        await this.customersButton.click();
    }

    }