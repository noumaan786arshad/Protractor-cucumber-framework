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
var expect = chai_1.default.expect;
class managerPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("managerPage");
        this.verify_homeButton_is_displayed("managerPage");
        this.addCustomerButton = protractor_1.element(protractor_1.by.css("button[ng-class='btnClass1']"));
        this.openAccountButton = protractor_1.element(protractor_1.by.css("button[ng-click='openAccount()']"));
        this.customersButton = protractor_1.element(protractor_1.by.css("button[ng-click='showCust()']"));
        this.homeButton = protractor_1.element(protractor_1.by.css("button[class='btn home']"));
    }
    click_on_addCustomers_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addCustomerButton.click();
        });
    }
    click_on_openAccount_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openAccountButton.click();
        });
    }
    click_on_customers_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customersButton.click();
        });
    }
}
exports.managerPage = managerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9tYW5hZ2VyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNEO0FBQ3RELGdEQUF3QjtBQUN4Qix1Q0FBb0M7QUFDcEMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFhLFdBQVksU0FBUSxpQkFBTztJQU9wQztRQUVJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRWEsNEJBQTRCOztZQUN0QyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFWSwyQkFBMkI7O1lBQ3BDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVZLHlCQUF5Qjs7WUFDbEMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUVBO0FBOUJMLGtDQThCSyJ9