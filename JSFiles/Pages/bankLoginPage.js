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
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const topMenu_1 = require("./topMenu");
// import { homePage } from "./homePage";
var expect = chai_1.default.expect;
class bankLoginPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("bankLoginPage");
        this.verify_homeButton_is_displayed("bankLoginPage");
        this.bankName = protractor_1.element(protractor_1.by.css("strong[class='mainHeading']"));
        this.customerLoginButton = protractor_1.element(protractor_1.by.css("button[ng-click='customer()']"));
        this.managerLoginButton = protractor_1.element(protractor_1.by.css("button[ng-click='manager()']"));
    }
    click_on_Manager_login_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.managerLoginButton.click();
            console.log("Clicked on managerLoginButton");
        });
    }
    click_on_Customer_login_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerLoginButton.click();
            console.log("Clicked on customerLoginButton");
        });
    }
}
exports.bankLoginPage = bankLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFua0xvZ2luUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VzL2JhbmtMb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRDtBQUN0RCxnREFBd0I7QUFDeEIsdUNBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQWEsYUFBYyxTQUFRLGlCQUFPO0lBTXRDO1FBRUksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVhLDZCQUE2Qjs7WUFDdkMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVZLDhCQUE4Qjs7WUFDdkMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtDQUVKO0FBMUJELHNDQTBCQyJ9