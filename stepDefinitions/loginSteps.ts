import {Given,When,Then} from "cucumber";
import { browser } from "protractor";
import {loginPage} from "../Pages/loginPage";
import { homePage } from "../Pages/homePage";
import chai from "chai";
var expect = chai.expect;

let login = new loginPage();
let home = new homePage();
Given('I have navigated to the website', async ()=> {
  
    await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    // await browser.sleep(3000);
  });

  Given('I enter usename and password and email', async ()=> {
    
      await login.userName.sendKeys("angular");
      await login.password.sendKeys("password");
      await login.email.sendKeys("testgmail.com");
    
  });

  When('I click {string} button', async (value)=> {
    if(value=="Login")
    {
      await login.submitButton.click();
    }    

  });

  Then('I should be successfully logged in', async ()=> {
    await home.pageHeader.getText().then(async(text)=>{
    console.log(text);
    await expect(text).to.equal("Home");
    
    });
    await home.successfulLoginMessage.getText().then(async(text)=>{
      console.log(text);
      await expect(text).to.equal("You're logged in!!");
    });

  });