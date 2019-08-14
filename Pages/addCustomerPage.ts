import { ElementFinder,element,by, browser } from "protractor";
import chai from "chai";
import { Alert } from "selenium-webdriver";
import { topMenu } from "./topMenu";
var expect = chai.expect;

export class addCustomerPage extends topMenu
{
    firstName:ElementFinder;
    lastName:ElementFinder;
    postCode:ElementFinder;
    addCustomerButton:ElementFinder;

    constructor()
    {
        super();
        this.verify_bankName("addCustomerPage");
        this.verify_homeButton_is_displayed("addCustomerPage");
        this.firstName=element(by.model("fName"));
        this.lastName=element(by.model("lName"));
        this.postCode=element(by.model("postCd"));
        this.addCustomerButton=element(by.css("button[type='submit']"));
    }

    public async verify_alert_after_customer_is_added(customerID:String)
    {
        let addCustomerAlertbc = browser.switchTo().alert();
       await  addCustomerAlertbc.getText().then(async(text)=>{
        console.log(text);
        await expect(text).to.equal("Customer added successfully with customer id :"+customerID);
        
        });

        await addCustomerAlertbc.accept();


    }

    
    }