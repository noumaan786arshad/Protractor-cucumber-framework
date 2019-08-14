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
const protractor_1 = require("protractor");
const loginPage_1 = require("../Pages/loginPage");
const homePage_1 = require("../Pages/homePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let login = new loginPage_1.loginPage();
let home = new homePage_1.homePage();
cucumber_1.Given('I have navigated to the website', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    // await browser.sleep(3000);
}));
cucumber_1.Given('I enter usename and password and email', () => __awaiter(this, void 0, void 0, function* () {
    yield login.userName.sendKeys("angular");
    yield login.password.sendKeys("password");
    yield login.email.sendKeys("testgmail.com");
}));
cucumber_1.When('I click {string} button', (value) => __awaiter(this, void 0, void 0, function* () {
    if (value == "Login") {
        yield login.submitButton.click();
    }
}));
cucumber_1.Then('I should be successfully logged in', () => __awaiter(this, void 0, void 0, function* () {
    yield home.pageHeader.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
        console.log(text);
        yield expect(text).to.equal("Home");
    }));
    yield home.successfulLoginMessage.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
        console.log(text);
        yield expect(text).to.equal("You're logged in!!");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9sb2dpblN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUM7QUFDekMsMkNBQXFDO0FBQ3JDLGtEQUE2QztBQUM3QyxnREFBNkM7QUFDN0MsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDMUIsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFRLEVBQUU7SUFFL0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO0lBQzlGLDZCQUE2QjtBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyx3Q0FBd0MsRUFBRSxHQUFRLEVBQUU7SUFFdEQsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFPLEtBQUssRUFBQyxFQUFFO0lBQzdDLElBQUcsS0FBSyxJQUFFLE9BQU8sRUFDakI7UUFDRSxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDbEM7QUFFSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVEsRUFBRTtJQUNuRCxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxJQUFJLEVBQUMsRUFBRTtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9