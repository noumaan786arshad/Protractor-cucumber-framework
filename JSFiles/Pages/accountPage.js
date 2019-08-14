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
const topMenu_1 = require("./topMenu");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const assert = require("assert");
var expect = chai_1.default.expect;
var chaiAsPromised = require('chai-as-promised');
chai_1.default.use(chaiAsPromised);
class accountPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("accountPage");
        this.verify_homeButton_is_displayed("accountPage");
        // this.verify_logoutButton_is_displayed("accountPage");     
        this.logoutButton = protractor_1.element(protractor_1.by.css("button[class='btn logout']"));
        this.wecomeMessage = protractor_1.element(protractor_1.by.xpath("//*[text()=' Welcome ']"));
        this.customerName = protractor_1.element(protractor_1.by.css("span[class='fontBig ng-binding']"));
        this.accountType = protractor_1.element(protractor_1.by.model("accountNo"));
        this.transactionButton = protractor_1.element(protractor_1.by.css("button[ng-click='transactions()']"));
        this.depositButton = protractor_1.element(protractor_1.by.css("button[ng-click='deposit()']"));
        this.withdrawlButton = protractor_1.element(protractor_1.by.css("button[ng-click='withdrawl()']"));
    }
    verify_welcome_message_and_customerName(customerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.wecomeMessage.getText().then(function (welcomeText) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield assert.equal(welcomeText, "Welcome " + customerName + " !!");
                    yield console.log("Correct welcome messsage displayed " + welcomeText);
                });
            });
        });
    }
    verify_logoutButton_is_displayed(pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(this.logoutButton.isPresent()).to.eventually.equals(true);
            // await this.logoutButton.isDisplayed();
            yield console.log("LOGOUT button is displayed on " + pageName + " top menu");
        });
    }
}
exports.accountPage = accountPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9hY2NvdW50UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9DO0FBQ3BDLDJDQUF3RDtBQUN4RCxnREFBd0I7QUFDeEIsaUNBQWtDO0FBQ2xDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDakQsY0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUd6QixNQUFhLFdBQVksU0FBUSxpQkFBTztJQVVwQztRQUVJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRVksdUNBQXVDLENBQUMsWUFBbUI7O1lBRXBFLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxXQUFXOztvQkFFOUQsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxVQUFVLEdBQUMsWUFBWSxHQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pFLENBQUM7YUFBQSxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFWSxnQ0FBZ0MsQ0FBQyxRQUFlOztZQUU1RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEUseUNBQXlDO1lBQ3pDLE1BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBQyxRQUFRLEdBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0UsQ0FBQztLQUFBO0NBR0E7QUE1Q0Qsa0NBNENDIn0=