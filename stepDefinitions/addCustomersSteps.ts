import {Given,When,Then} from "cucumber";
import { browser } from "protractor";
import chai from "chai";
import { bankLoginPage } from "../Pages/bankLoginPage";
import { AssertionError } from "assert";
import assert = require("assert");
import { async } from "q";
import { managerPage } from "../Pages/managerPage";
import { addCustomerPage } from "../Pages/addCustomerPage";
var expect = chai.expect;

let bankLogin = new bankLoginPage();
let manager = new managerPage();
let addCustomer = new addCustomerPage();

  Given('I click on {string} button', async (profile) =>{
      if(profile=="Bank Manager Login")
      {
          await bankLogin.click_on_Manager_login_button();
         //await browser.sleep(3000);
        
      }
      else if(profile=="Customer Login")
      {
       await bankLogin.click_on_Customer_login_button();
      }
      else if(profile=="Home")
      {
        await bankLogin.click_on_Home_button();
      }
      else{assert.fail("No such button found: "+profile);}

      // await bankLogin.verify_bankName();  
  });

  Given('I click {string} button from the bank application', async (buttonName)=> {
    if(buttonName=="Add Customer")
    {
       await manager.click_on_addCustomers_button();
       //await browser.sleep(3000);
    }
    else{assert.fail("No such button found: "+buttonName);}
    
  });

  When('I enter customer details and submit the application', async ()=> {
    let firstName:string = "Nouman Arshad";
    let lastName:string="syed";
    let postCode:number=3122;

    await addCustomer.firstName.sendKeys(firstName);
    await addCustomer.lastName.sendKeys(lastName);
    await addCustomer.postCode.sendKeys(postCode);
    await addCustomer.addCustomerButton.click()

    //await browser.sleep(3000);
    
  });

  When('I enter customer details such as {string} {string} and {string} and submit the application', async function (firstName, lastName, postCode) {
    // Write code here that turns the phrase above into concrete actions
    await addCustomer.firstName.sendKeys(firstName);
    await addCustomer.lastName.sendKeys(lastName);
    await addCustomer.postCode.sendKeys(postCode);
    await addCustomer.addCustomerButton.click();
  });

  When('I enter customer details such as {string}firstName{string}LastName{string}postcode" and submit the application', async function (firstName, lastName, postCode) {
    // Write code here that turns the phrase above into concrete actions
    await addCustomer.firstName.sendKeys(firstName);
    await addCustomer.lastName.sendKeys(lastName);
    await addCustomer.postCode.sendKeys(postCode);
    await addCustomer.addCustomerButton.click()
  });

  
  Then('the customer should be successfully added with {string}', async function (customerID) {
    // Write code here that turns the phrase above into concrete actions
    await addCustomer.verify_alert_after_customer_is_added(customerID);
  });