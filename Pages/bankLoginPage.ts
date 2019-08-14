import { ElementFinder,element,by } from "protractor";
import chai from "chai";
import { topMenu } from "./topMenu";
// import { homePage } from "./homePage";
var expect = chai.expect;

export class bankLoginPage extends topMenu
{
    bankName:ElementFinder;
    customerLoginButton:ElementFinder;
    managerLoginButton:ElementFinder;    

    constructor()
    {
        super();
        this.verify_bankName("bankLoginPage");
        this.verify_homeButton_is_displayed("bankLoginPage");
        this.bankName=element(by.css("strong[class='mainHeading']"));
        this.customerLoginButton=element(by.css("button[ng-click='customer()']"));
        this.managerLoginButton=element(by.css("button[ng-click='manager()']"));       
    }

    public  async click_on_Manager_login_button() {
        await this.managerLoginButton.click();
        console.log("Clicked on managerLoginButton");
    }
    
    public async click_on_Customer_login_button() {
        await this.customerLoginButton.click();
        console.log("Clicked on customerLoginButton");
    }

}