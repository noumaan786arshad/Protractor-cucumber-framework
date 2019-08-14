import { Given,When,Then } from "cucumber";
import { customerLoginPage } from "../Pages/customerLoginPage";
import { browser } from "protractor";
import {accountPage} from "../Pages/accountPage";


let customerPage = new customerLoginPage();
let accountpage = new accountPage();

  Given('I shouldnt see the login button initially untill I select the customer from dropdown list', async function () {
    //await customerPage.verify_if_submitButton_present_is_not_present();
    let value = await customerPage.verify_whether_submit_button_is_present_or_not();
       
    if(value==true)
    {
      throw Error ("SUBMIT button found on customer page before customer is seleted from dropdown");
    }
    else
    {
    await console.log("SUBMIT button is not found on customer page before customer is seleted from dropdown")
    }
  });



  When('I select the customer {string} from customer dropdown list', async function (customerName) {
    await customerPage.select_customer(customerName);
    await browser.sleep(2000);
  });



  Then('login button should be displayed', async function () {
    let value = await customerPage.verify_whether_submit_button_is_present_or_not();
    if(value==false)
    {
      throw Error ("SUBMIT button not found on customer page after customer is seleted from dropdown");
    }
    else
    {
    await console.log("SUBMIT button is found on customer page after customer is seleted from dropdown")
    }
  });


  When('I click on login button', async function () {
   await customerPage.click_on_Login_button();
  });

  Then('user should see welcome message against his name {string} with transactions, withdraw and deposit options', async function (customerName) {
    await accountpage.verify_logoutButton_is_displayed("accountPage");
    await accountpage.verify_welcome_message_and_customerName(customerName);
  });