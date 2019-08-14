import { topMenu } from "./topMenu";
import { ElementFinder, element, by } from "protractor";
import chai from "chai";
import assert = require("assert");
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


export class accountPage extends topMenu
{
logoutButton:ElementFinder;
wecomeMessage:ElementFinder;
customerName:ElementFinder;
accountType:ElementFinder;
transactionButton:ElementFinder;
depositButton:ElementFinder;
withdrawlButton:ElementFinder;

    constructor()
    {
        super();
        this.verify_bankName("accountPage");
        this.verify_homeButton_is_displayed("accountPage");   
        // this.verify_logoutButton_is_displayed("accountPage");     
        this.logoutButton=element(by.css("button[class='btn logout']"));
        this.wecomeMessage=element(by.xpath("//*[text()=' Welcome ']"));
        this.customerName=element(by.css("span[class='fontBig ng-binding']"));
        this.accountType=element(by.model("accountNo"));
        this.transactionButton=element(by.css("button[ng-click='transactions()']"));
        this.depositButton=element(by.css("button[ng-click='deposit()']"));
        this.withdrawlButton=element(by.css("button[ng-click='withdrawl()']"));        
    }

    public async verify_welcome_message_and_customerName(customerName:String)
    {
        await this.wecomeMessage.getText().then(async function(welcomeText){
            
            await assert.equal(welcomeText,"Welcome "+customerName+" !!");
            await console.log("Correct welcome messsage displayed "+welcomeText);
        });
       
    }

    public async verify_logoutButton_is_displayed(pageName:String)
{
     await expect(this.logoutButton.isPresent()).to.eventually.equals(true);

    // await this.logoutButton.isDisplayed();
    await  console.log("LOGOUT button is displayed on "+pageName +" top menu");
}

    
}