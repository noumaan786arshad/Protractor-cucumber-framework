"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const customerLoginPage_1 = require("../Pages/customerLoginPage");
const protractor_1 = require("protractor");
const accountPage_1 = require("../Pages/accountPage");
let customerPage = new customerLoginPage_1.customerLoginPage();
let accountpage = new accountPage_1.accountPage();
cucumber_1.Given('I shouldnt see the login button initially untill I select the customer from dropdown list', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await customerPage.verify_if_submitButton_present_is_not_present();
        let value = yield customerPage.verify_whether_submit_button_is_present_or_not();
        if (value == true) {
            throw Error("SUBMIT button found on customer page before customer is seleted from dropdown");
        }
        else {
            yield console.log("SUBMIT button is not found on customer page before customer is seleted from dropdown");
        }
    });
});
cucumber_1.When('I select the customer {string} from customer dropdown list', function (customerName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield customerPage.select_customer(customerName);
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Then('login button should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let value = yield customerPage.verify_whether_submit_button_is_present_or_not();
        if (value == false) {
            throw Error("SUBMIT button not found on customer page after customer is seleted from dropdown");
        }
        else {
            yield console.log("SUBMIT button is found on customer page after customer is seleted from dropdown");
        }
    });
});
cucumber_1.When('I click on login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield customerPage.click_on_Login_button();
    });
});
cucumber_1.Then('user should see welcome message against his name {string} with transactions, withdraw and deposit options', function (customerName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield accountpage.verify_logoutButton_is_displayed("accountPage");
        yield accountpage.verify_welcome_message_and_customerName(customerName);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJMb2dpblN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2N1c3RvbWVyTG9naW5TdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTJDO0FBQzNDLGtFQUErRDtBQUMvRCwyQ0FBcUM7QUFDckMsc0RBQWlEO0FBR2pELElBQUksWUFBWSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztBQUMzQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVsQyxnQkFBSyxDQUFDLDJGQUEyRixFQUFFOztRQUNqRyxxRUFBcUU7UUFDckUsSUFBSSxLQUFLLEdBQUcsTUFBTSxZQUFZLENBQUMsOENBQThDLEVBQUUsQ0FBQztRQUVoRixJQUFHLEtBQUssSUFBRSxJQUFJLEVBQ2Q7WUFDRSxNQUFNLEtBQUssQ0FBRSwrRUFBK0UsQ0FBQyxDQUFDO1NBQy9GO2FBRUQ7WUFDQSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0ZBQXNGLENBQUMsQ0FBQTtTQUN4RztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsNERBQTRELEVBQUUsVUFBZ0IsWUFBWTs7UUFDN0YsTUFBTSxZQUFZLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRTs7UUFDdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxZQUFZLENBQUMsOENBQThDLEVBQUUsQ0FBQztRQUNoRixJQUFHLEtBQUssSUFBRSxLQUFLLEVBQ2Y7WUFDRSxNQUFNLEtBQUssQ0FBRSxrRkFBa0YsQ0FBQyxDQUFDO1NBQ2xHO2FBRUQ7WUFDQSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUZBQWlGLENBQUMsQ0FBQTtTQUNuRztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMseUJBQXlCLEVBQUU7O1FBQy9CLE1BQU0sWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyR0FBMkcsRUFBRSxVQUFnQixZQUFZOztRQUM1SSxNQUFNLFdBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=