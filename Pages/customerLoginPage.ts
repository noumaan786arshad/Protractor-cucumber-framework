import { topMenu } from "./topMenu";
import { ElementFinder, element, by } from "protractor";
import chai from "chai";
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


export class customerLoginPage extends topMenu
{
 customerDropdown:ElementFinder;
 loginButton:ElementFinder;
 yourNameLabel:ElementFinder;

    constructor()
    {
        super();
        this.verify_bankName("customerPage");
        this.verify_homeButton_is_displayed("customerPage");
        this.customerDropdown=element(by.id("userSelect"));
        this.loginButton=element(by.css("button[class='btn btn-default']"));
    }

    public async select_customer(customer:String)
    {
        await this.customerDropdown.all(by.tagName('option')).each(async function(item)
        {
            item.getText().then(async function(customers)
            {
                if(customers==customer)
                {
                    item.click();
                }
                await console.log(customers);
            });
        });
    }

    public async verify_whether_submit_button_is_present_or_not()
    {
        return await this.loginButton.isPresent(); //expect(this.loginButton.isPresent()).to.eventually.equal(false);
        
    }

    public async click_on_Login_button()
    {
        await this.loginButton.click();
    }
   
    
}