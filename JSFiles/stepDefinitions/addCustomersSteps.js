"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai_1 = __importDefault(require("chai"));
const bankLoginPage_1 = require("../Pages/bankLoginPage");
const assert = require("assert");
const managerPage_1 = require("../Pages/managerPage");
const addCustomerPage_1 = require("../Pages/addCustomerPage");
var expect = chai_1.default.expect;
let bankLogin = new bankLoginPage_1.bankLoginPage();
let manager = new managerPage_1.managerPage();
let addCustomer = new addCustomerPage_1.addCustomerPage();
cucumber_1.Given('I click on {string} button', (profile) => __awaiter(this, void 0, void 0, function* () {
    if (profile == "Bank Manager Login") {
        yield bankLogin.click_on_Manager_login_button();
        //await browser.sleep(3000);
    }
    else if (profile == "Customer Login") {
        yield bankLogin.click_on_Customer_login_button();
    }
    else if (profile == "Home") {
        yield bankLogin.click_on_Home_button();
    }
    else {
        assert.fail("No such button found: " + profile);
    }
    // await bankLogin.verify_bankName();  
}));
cucumber_1.Given('I click {string} button from the bank application', (buttonName) => __awaiter(this, void 0, void 0, function* () {
    if (buttonName == "Add Customer") {
        yield manager.click_on_addCustomers_button();
        //await browser.sleep(3000);
    }
    else {
        assert.fail("No such button found: " + buttonName);
    }
}));
cucumber_1.When('I enter customer details and submit the application', () => __awaiter(this, void 0, void 0, function* () {
    let firstName = "Nouman Arshad";
    let lastName = "syed";
    let postCode = 3122;
    yield addCustomer.firstName.sendKeys(firstName);
    yield addCustomer.lastName.sendKeys(lastName);
    yield addCustomer.postCode.sendKeys(postCode);
    yield addCustomer.addCustomerButton.click();
    //await browser.sleep(3000);
}));
cucumber_1.When('I enter customer details such as {string} {string} and {string} and submit the application', function (firstName, lastName, postCode) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield addCustomer.firstName.sendKeys(firstName);
        yield addCustomer.lastName.sendKeys(lastName);
        yield addCustomer.postCode.sendKeys(postCode);
        yield addCustomer.addCustomerButton.click();
    });
});
cucumber_1.When('I enter customer details such as {string}firstName{string}LastName{string}postcode" and submit the application', function (firstName, lastName, postCode) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield addCustomer.firstName.sendKeys(firstName);
        yield addCustomer.lastName.sendKeys(lastName);
        yield addCustomer.postCode.sendKeys(postCode);
        yield addCustomer.addCustomerButton.click();
    });
});
cucumber_1.Then('the customer should be successfully added with {string}', function (customerID) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield addCustomer.verify_alert_after_customer_is_added(customerID);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ3VzdG9tZXJzU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvYWRkQ3VzdG9tZXJzU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QztBQUV6QyxnREFBd0I7QUFDeEIsMERBQXVEO0FBRXZELGlDQUFrQztBQUVsQyxzREFBbUQ7QUFDbkQsOERBQTJEO0FBQzNELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxTQUFTLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDaEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFFdEMsZ0JBQUssQ0FBQyw0QkFBNEIsRUFBRSxDQUFPLE9BQU8sRUFBRSxFQUFFO0lBQ2xELElBQUcsT0FBTyxJQUFFLG9CQUFvQixFQUNoQztRQUNJLE1BQU0sU0FBUyxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDakQsNEJBQTRCO0tBRTlCO1NBQ0ksSUFBRyxPQUFPLElBQUUsZ0JBQWdCLEVBQ2pDO1FBQ0MsTUFBTSxTQUFTLENBQUMsOEJBQThCLEVBQUUsQ0FBQztLQUNqRDtTQUNJLElBQUcsT0FBTyxJQUFFLE1BQU0sRUFDdkI7UUFDRSxNQUFNLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQ3hDO1NBQ0c7UUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQUM7SUFFcEQsdUNBQXVDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLG1EQUFtRCxFQUFFLENBQU8sVUFBVSxFQUFDLEVBQUU7SUFDN0UsSUFBRyxVQUFVLElBQUUsY0FBYyxFQUM3QjtRQUNHLE1BQU0sT0FBTyxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDN0MsNEJBQTRCO0tBQzlCO1NBQ0c7UUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQUM7QUFFekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxREFBcUQsRUFBRSxHQUFRLEVBQUU7SUFDcEUsSUFBSSxTQUFTLEdBQVUsZUFBZSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxHQUFRLE1BQU0sQ0FBQztJQUMzQixJQUFJLFFBQVEsR0FBUSxJQUFJLENBQUM7SUFFekIsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsTUFBTSxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFM0MsNEJBQTRCO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEZBQTRGLEVBQUUsVUFBZ0IsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFROztRQUM5SSxvRUFBb0U7UUFDcEUsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnSEFBZ0gsRUFBRSxVQUFnQixTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVE7O1FBQ2xLLG9FQUFvRTtRQUNwRSxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHlEQUF5RCxFQUFFLFVBQWdCLFVBQVU7O1FBQ3hGLG9FQUFvRTtRQUNwRSxNQUFNLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=