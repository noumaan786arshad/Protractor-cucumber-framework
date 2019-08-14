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
var expect = chai_1.default.expect;
var chaiAsPromised = require('chai-as-promised');
chai_1.default.use(chaiAsPromised);
class customerLoginPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("customerPage");
        this.verify_homeButton_is_displayed("customerPage");
        this.customerDropdown = protractor_1.element(protractor_1.by.id("userSelect"));
        this.loginButton = protractor_1.element(protractor_1.by.css("button[class='btn btn-default']"));
    }
    select_customer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerDropdown.all(protractor_1.by.tagName('option')).each(function (item) {
                return __awaiter(this, void 0, void 0, function* () {
                    item.getText().then(function (customers) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (customers == customer) {
                                item.click();
                            }
                            yield console.log(customers);
                        });
                    });
                });
            });
        });
    }
    verify_whether_submit_button_is_present_or_not() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.loginButton.isPresent(); //expect(this.loginButton.isPresent()).to.eventually.equal(false);
        });
    }
    click_on_Login_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginButton.click();
        });
    }
}
exports.customerLoginPage = customerLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9jdXN0b21lckxvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9DO0FBQ3BDLDJDQUF3RDtBQUN4RCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxjQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR3pCLE1BQWEsaUJBQWtCLFNBQVEsaUJBQU87SUFNMUM7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVZLGVBQWUsQ0FBQyxRQUFlOztZQUV4QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFlLElBQUk7O29CQUUxRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsU0FBUzs7NEJBRXhDLElBQUcsU0FBUyxJQUFFLFFBQVEsRUFDdEI7Z0NBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzZCQUNoQjs0QkFDRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2pDLENBQUM7cUJBQUEsQ0FBQyxDQUFDO2dCQUNQLENBQUM7YUFBQSxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFWSw4Q0FBOEM7O1lBRXZELE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsa0VBQWtFO1FBRWpILENBQUM7S0FBQTtJQUVZLHFCQUFxQjs7WUFFOUIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUdKO0FBMUNELDhDQTBDQyJ9